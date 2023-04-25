const express = require("express");
const { getAdd, postAdd } = require("../controllers/addController");
const router = express.Router();
const { upload } = require("../middlewares/multer");

router.get("/", getAdd);
router.post("/", upload.single("image"), postAdd);

module.exports = router;
