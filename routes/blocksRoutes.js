const express = require("express");
const router = express.Router();
const { listarBlocks } = require("../controllers/blocksController");

router.get("/blocks", listarBlocks);

module.exports = router;
