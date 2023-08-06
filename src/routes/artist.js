const artistController = require("../controllers/artist");

const express = require("express");

const router = express.Router();

router.post("/", artistController.createArtist);

router.get("/", artistController.getAllArtists);

router.get("/:id", artistController.getArtistById);

module.exports = router;
