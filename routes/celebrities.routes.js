const express = require('express');
const router  = express.Router();

const celebritiesController = require("../controllers/celebrities.controller")

/* GET home page */
router.get('/', celebritiesController.list);

router.get("/new", celebritiesController.createCelebrity)

router.post("/", celebritiesController.doCreateCelebrity)

router.get('/:id', celebritiesController.detail)

module.exports = router;
