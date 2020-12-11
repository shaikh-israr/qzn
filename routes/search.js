const express = require("express");
const router = express.Router();
const SearchController = require("../controllers/SearchController");

router.get("/:title", SearchController.search);
module.exports = router;
