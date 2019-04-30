
const path = require('path');
const request = require('request');
const data = require('../model')
const pathToData = path.join(__dirname, '..', 'model', 'index.js')
exports.post = (req,res) => {
 
    const { name, quote } = req.body;
  console.log(name, quote);

   let arraytosend = data;
   arraytosend.push({ name, quote });


if (error) => {
  if (error) {
    console.error(error)
    return res.render('500') }
   return res.redirect(301, '/');
})


  }
