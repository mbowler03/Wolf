const db = require("../models");
const ObjectId = require("mongoose").Types.ObjectId;

add_players = (players, session, index) =>
{
	if (index === players.length)
		return;

	return db.Player.create({name: players[index]})
	.then(db_player => session.updateOne({$push: {players: db_player._id}}))
	.then(() => add_players(players, session, index + 1))
	.catch(err => console.log(err));
};

get_wolf = session =>
{
	const players = session.players;
	const count = players.length;
	if (((18 - session.hole) / count) < (18 % count) / count) {
		let low = 0;
		for (let i = 0; i < count; i++) {
			if (players[i].earnings < players[low].earnings)
				low = i;
		}

		return [players[low].name];
	}

	return [players[(session.hole - 1) % count].name];
};

get_players = (session, wolf) =>
{
	const names = session.players.map(player => player.name);
	return names.filter(name => name != wolf);
};

calculate = (player, bet) =>
{
	player.earnings += bet;
	db.Player.findById(player._id)
	.then(db_player => db_player.updateOne(player))
	.catch(err => console.log(err));
};

module.exports = {
	begin_session: function(req, res)
	{
		let id;
		db.Session.create({})
		.then(db_session =>
		{
			id = db_session._id;
			return add_players(req.body.players, db_session, 0)
		}).then(() => res.json(id))
		.catch(err => res.status(422).json(err));
	},
	begin_hole: function(req, res)
	{
		db.Session.findById(req.params.id)
		.populate("players")
		.then(db_session =>
		{
			const wolf = get_wolf(db_session);
			res.json({
				wolf: wolf,
				rest: get_players(db_session, wolf),
				hole: db_session.hole
			});
		}).catch(err => res.status(422).json(err));
	},
	end_hole: function(req, res)
	{
		db.Session.findById(req.params.id)
		.populate("players")
		.then(db_session =>
		{
			const wolf = req.body.wolf;
			const hunter = req.body.hunter;
			const hole_num = db_session.hole;
			let bet = req.body.bet;
			let wolf_bet = bet * (hunter.length / wolf.length);

			if (req.body.winner === "wolf") {
				bet = -bet;
			} else if (req.body.winner === "hunter") {
				wolf_bet = -wolf_bet;
			} else {
				bet = 0;
				wolf_bet = 0;
			}

			const players = db_session.players;
			for (let i = 0; i < players.length; i++) {
				for (let j = 0; j < wolf.length; j++) {
					if (players[i].name === wolf[j])
						calculate(players[i], wolf_bet);
				}

				for (let j = 0; j < hunter.length; j++) {
					if (players[i].name === hunter[j])
						calculate(players[i], bet);
				}
			}

			res.json({
				players: players.map(player => player.name),
				amounts: players.map(player => player.earnings)
			});

			if (db_session.hole === 18) {
				players.forEach(player =>
				{
					db.Player.findById(player._id)
					.then(db_player => db_player.remove())
					.catch(err => console.log(err));
				});
				db_session.remove();
				console.log("%s: END OF LINE", db_session._id);
			} else {
				db_session.updateOne({hole: hole_num + 1})
				.then()
				.catch(err => console.log(err));
			}
		}).catch(err => res.status(422).json(err));
	}
};
