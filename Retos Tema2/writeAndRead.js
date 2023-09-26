const fs = require('fs/promises');

const persona = { name: 'Paco', surname: 'Castillo', age: 40 };

fs.writeFile('./persona.json', JSON.stringify(persona))
    .then(() => {

        fs.readFile('./persona.json', 'utf8').then((jsonString) => {
            console.log('File data: ', jsonString);
        })
        .catch((err) => {
            console.log('Error:', err);
        });
    })
    .catch((err) => {
        console.log('Error:', err);
        
    });



