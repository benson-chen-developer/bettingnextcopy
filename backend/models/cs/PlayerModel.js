const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    playerId: { type: String, required: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    picId: { type: String, required: false },
    team: { type: String, required: false },
    matches: { type: [String], required: false }
});

const CSPlayer = mongoose.model("csplayers", PlayerSchema);

module.exports = CSPlayer;