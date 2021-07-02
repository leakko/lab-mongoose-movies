const express = require('express');
const router  = express.Router();

const celebritiesController = require("../controllers/celebrities.controller")

/* GET home page */
router.get('/', celebritiesController.list);

module.exports = router;
