const express = require("express");
const { getAmd } = require("../controllers/amdController");
const router = express.Router();

router.get("/", getAmd);

module.exports = router;