//reto1.1*****
const express = require('express');
const app = express();

app.get('/', function(request, response)
{
    console.log('Peticion recibida del cliente')
    console.log(request.url)
    console.log(request.method)
    console.log(request.headers['user-agent'])
    // console.log(request)
    response.send('Hello from server')
});

app.listen(4000);