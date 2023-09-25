const fs = require('fs');

const persona = {name:'Paco', surname:'Castillo', age:40};

fs.writeFile('./persona.json', JSON.stringify(persona), err =>{
    if(err){
        console.log('Error:',err)
    }
})

fs.readFile('./persona.json', 'utf8', (err, jsonString) =>{
    if(err){
        console.log('Error:', err);
    } else {
        console.log("Persona:", jsonString);
    }
})
