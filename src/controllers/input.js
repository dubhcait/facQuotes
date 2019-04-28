
const fs = require('fs');
const path = require('path')

exports.post = (req,res) => {
 const { name, quote } = req.body;
  console.log(name, quote);
  const objectToString= { [quote] :  [name]};
const objectToSend = JSON.stringify(objectToString);
  fs.writeFile(path.join(__dirname, '..', 'model', 'index.js'), objectToSend, (error) => {
     if (error){ 
         console.log(error)
       return res.render('500')} 
       else {
           return res.render('home')
       }

//        var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';

// var obj = JSON.parse(jsonStr);
// obj['theTeam'].push({"teamId":"4","status":"pending"});
// jsonStr = JSON.stringify(obj);
//   });
 
   
});
}