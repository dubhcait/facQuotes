const path = require('path');
const fs = require('fs');
const pathToData =  path.join(__dirname, '..', '..', 'model', 'index.json')

const dataArray = fs.readFile(pathToData, 'utf-8', function(err, data) {
    
    if (err) throw err

    var arrayOfObjects = JSON.parse(data)
    
    return arrayOfObjects
})

module.exports = dataArray;