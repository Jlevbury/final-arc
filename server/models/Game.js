const {Schema, Types} = require('mongoose');

const gameSchema = new Schema({
    gameId : {
        type: Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    rawgId : {
        type: String,
        required: [true, "A game ID is required!"],
    },
    name: {
        type: String,
        required: [true, "A game name is required!"],
    },
    image: {
        type: String,
    },
    rating: {
        type: Number,
    },
});

module.exports = gameSchema;