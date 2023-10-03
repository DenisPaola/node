const app = require('./app');

app.listen(app.get('port'), function () {
    console.log('Server linten on port ' + app.get('port'));
});