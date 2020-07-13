const axios = require("axios");

function run_hole(id)
{
	axios.get("http://localhost:3001/api/hole/" + id)
	.then(res =>
	{
		console.log(res.data);
		let hole = res.data.hole;
		axios.post("http://localhost:3001/api/hole/" + id, {
			wolf: res.data.wolf,
			hunter: res.data.rest,
			bet: 6,
			winner: Math.random() > 0.5 ? "wolf" : "hunter"
		}).then(res =>
		{
			console.log(res.data);
			if (hole === 18)
				return;
			else
				run_hole(id);
		}).catch(err => console.log(err));
	}).catch(err => console.log(err));
}


axios.post("http://localhost:3001/api/players", {players: ["Jonathan", "Matthew", "Jay", "Deep"]})
.then(res =>
{
	var id = res.data;
	console.log(res.data);
	run_hole(id);
}).catch(err => console.log(err));