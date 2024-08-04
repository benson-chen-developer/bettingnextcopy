const express = require("express");
const router = express.Router();
const ValorantPlayer = require("../models/valorant/valorantPlayerModel");

router.get("/players", async (req, res) => {
    try {
        const players = await ValorantPlayer.find(); 
        res.status(200).json(players);
    } catch (err) {
        console.error("Error fetching players", err);
        res.status(500).send({ message: "Error fetching players" });
    }
})

module.exports = router;