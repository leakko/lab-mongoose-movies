const express = require('express');
const router  = express.Router();

const celebritiesController = require("../controllers/celebrities.controller")

/* GET home page */
router.get('/', celebritiesController.list);

router.get('/:id', celebritiesController.detail)

module.exports = router;
