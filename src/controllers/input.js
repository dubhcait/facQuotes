
const fs = require('fs');
const path = require('path')

const pathToData = path.join(__dirname, '..', 'model', 'index.json')

exports.post = (req,res) => {
 const { name, quote } = req.body;
  console.log(name, quote);
  const objectToSend= {quote,name};



fs.readFile(pathToData, 'utf-8', function(err, data) {
    
    if (err) throw err

	var arrayOfObjects = JSON.parse(data)
    arrayOfObjects.push(objectToSend);
    const arrayToSend = JSON.stringify(arrayOfObjects);

 fs.writeFile(pathToData, arrayToSend, (error)=> {
     if (error){ 
         console.log(error)
       return res.render('500')
    } 
       else {
           return res.redirect(301, '/');
       }
    }
 ) } ) 
};
