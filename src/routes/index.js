const express = require('express');

const quotes = require('./../model');

const router = express.Router();

router.get('/', (req,res) => {

    res.render('home', {quotes: quotes});
});

module.exports = router;