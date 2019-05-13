const path = require('path');
const fs = require('fs');
const pathToData =  path.join(__dirname, '..', '..', 'model', 'index.js')

const dataArray = fs.readFile(pathToData, 'utf-8', function(err, data) {
    
    if (err) throw err

 return data
})

module.exports = dataArray;