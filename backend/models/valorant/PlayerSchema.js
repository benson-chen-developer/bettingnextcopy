const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    ...PlayerSchema,
    gameUrls: {type: [String], required: true}
});

const ValorantPlayer = mongoose.model("wnbaplayers", PlayerSchema);

module.exports = ValorantPlayer;