const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gameSchema = new Schema (
{
    sessionId: String,
    playerInfo: {
        
    wolf: [String],
    rest: [String],
    hole: {}
    },
    betInfo: {

    }

}
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;