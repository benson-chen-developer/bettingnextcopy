const mongoose = require("mongoose");

const PlayerStatsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    kills: { type: [Number], required: true },
    deaths: { type: [Number], required: true },
    assists: { type: [Number], required: true },
    firstKills: { type: [Number], required: true },
    firstDeaths: { type: [Number], required: true }
});

const MapSchema = new mongoose.Schema({
    map: {type: String, required: true},
    players: {type: [PlayerStatsSchema], required: true},
    didPlay: {type: Boolean, required: true}
});

const MatchSchema = new mongoose.Schema({
    team1: { type: String, required: true },
    team2: { type: String, required: true },
    date: { type: String, required: true },
    maps: {
        type: [MapSchema], required: true
    },
    url: { type: String, required: true },
});

const ValorantPlayer = mongoose.model("valorantplayers", MatchSchema);

module.exports = ValorantPlayer;