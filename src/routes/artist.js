const artistController = require("../controllers/artist");

const artistUpdateController = require("../controllers/artist-update");

const express = require("express");

const router = express.Router();

router.post("/", artistController.createArtist);

router.get("/", artistController.getAllArtists);

router.get("/:id", artistController.getArtistById);

router.put("/:id", artistUpdateController.putArtist);

module.exports = router;
