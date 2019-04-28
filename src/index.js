const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('The magic is happeing on port', app.get('port'));
});