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

module.exports.detail = (req, res, next) => {
    const id = req.params.id
    Celebrity.findById(id)
        .then ((celebrity) => {
            res.render("celebrityInfo", celebrity)
        })
        .catch((e) => {
            next(e)
        })
}

module.exports.createCelebrity = (req, res, next) => {
    res.render("celebrityForm")
}

module.exports.doCreateCelebrity = (req, res, next) => {
    const newCelebrity = req.body;
    console.log("CELEBRITYYYYYYYYYYYYYYYY: ", req.body)
    Celebrity.create(newCelebrity)
        .then(() => {
            res.redirect("/celebrities")
        })
}