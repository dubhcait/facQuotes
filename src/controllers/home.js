const quotes = require('../model');



exports.get = (req,res) => {

    res
     .status(200)
    .render('home', {quotes: quotes});
   
};
