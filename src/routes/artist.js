const artistController = require("../controllers/artist");

const artistUpdateController = require("../controllers/artist-update");

const artistDeleteController = require("../controllers/artist-delete");

const express = require("express");

const router = express.Router();

router.post("/", artistController.createArtist);

router.get("/", artistController.getAllArtists);

router.get("/:id", artistController.getArtistById);

router.put("/:id", artistUpdateController.putArtist);

router.patch("/:id", artistUpdateController.patchArtist);

router.delete("/:id", artistDeleteController.deleteArtist);

module.exports = router;
