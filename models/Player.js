const mongoose = require("mongoose");

module.exports = mongoose.model("Player", new mongoose.Schema({
	name: String,
	earnings: {
		type: Number,
		default: 0
	}
}));
