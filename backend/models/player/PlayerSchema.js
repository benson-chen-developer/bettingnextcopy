const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    picId: { type: String, required: true },
    team: { type: String, required: true },
    playerId: { type: String, required: true },
    sport: { type: String, required: true },
    stats: [{ 
        name: { type: String, required: true }, 
        number: { type: Number, required: true } 
    }]
});

module.exports = PlayerSchema;