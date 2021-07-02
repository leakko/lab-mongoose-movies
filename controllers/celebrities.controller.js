const mongoose = require("mongoose");
const Celebrity = require ("../models/Celebrity.model");

module.exports.list = (req, res, next) => {
    Celebrity.find()
        .then ((celebrities) => {
            res.render("celebritiesList", {celebritiesArr: celebrities})
        })
        .catch((e) => {
            next(e)
        })
}