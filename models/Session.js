const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = mongoose.model("Session", new Schema({
	hole: {
		type: Number,
		default: 1
	},
	players: [
		{
			type: Schema.Types.ObjectId,
			ref: "Player"
		}
	]
}));
