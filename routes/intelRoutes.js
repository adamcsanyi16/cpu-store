const express = require("express");
const { getIntel } = require("../controllers/intelController");
const router = express.Router();

router.get("/", getIntel);

module.exports = router;
