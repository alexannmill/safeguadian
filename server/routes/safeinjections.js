const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Hello safe I!"));


module.exports = router;