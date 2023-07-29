const artistController = require("../controllers/artist");

const express = require("express");

const router = express.Router();

router.post("/", artistController.createArtist);

module.exports = router;
