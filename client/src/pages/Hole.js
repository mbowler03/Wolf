import React, { Component } from "react";
import API from "../utils/API";
import PlayerSelect from "../components/PlayerSelect";
import BeginHole from "../components/BeginHole";
import EndHole from "../components/EndHole";

class Hole extends Component {
	state = {
		wolf: [],
		hunter: [],
		bet: 0,
		hole: 0,
		state: 0
	};


	getPlayers = () => {
		API.getHole(localStorage.getItem("id"))
		.then(res => {
			this.setState({
				wolf: res.data.wolf,
				hunter: res.data.rest,
				hole: res.data.hole
			});
		}).catch(err => console.log(err));
	};

	change = index => {
		let wolf = [...this.state.wolf];
		let hunter = [...this.state.hunter];
		wolf.push(hunter[index]);
		hunter.splice(index, 1);
		this.setState({wolf, hunter});
	};

	startHole = bet => {
		console.log(bet);
		this.setState({
			bet: bet,
			state: 1
		});
	};

	endHole = winner => {
		API.postHole(localStorage.getItem("id"), {
			wolf: this.state.wolf,
			hunter: this.state.hunter,
			bet: this.state.bet,
			winner: winner
		}).then(res => {
			this.setState({
				wolf: res.data.players,
				hunter: res.data.amounts,
				state: 2
			});
			if (this.state.hole === 18) {
				localStorage.removeItem("id");
			}
		}).catch(err => console.log(err));
	};

	reset = () => {
		if (this.state.hole === 18) {
			window.location.href = "/";
		} else {
			this.setState({
				state: 0
			});
		}
	};

	render_components = () => {
		switch (this.state.state) {
		case 0:
			return (
				<PlayerSelect
					setup={this.getPlayers}
					wolf={this.state.wolf}
					rest={this.state.hunter}
					change={this.change}
					next={this.startHole}
				/>
			);

		case 1:
			return (
				<BeginHole
					wolf={this.state.wolf}
					hunter={this.state.hunter}
					hole={this.state.hole}
					next={this.endHole}
				/>
			);

		case 2:
			return (
				<EndHole
					players={this.state.wolf}
					amounts={this.state.hunter}
					hole={this.state.hole}
					next={this.reset}
				/>
			);

		default:
			return <div></div>
		}
	};

	render() {
		return this.render_components()
	};
};

export default Hole;
