const fs = require('fs');
const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);
const persona = {name:'', surname:'', age: 0};
console.log('reto03');

rl.question('what is your age?', (age) =>{
    persona.age = age;

    rl.question('what is your name?', (name) =>{
        persona.name = name;

        rl.question('what is your surname?', (surname) =>{
           persona.surname = surname;
           console.log(`persona ${JSON.stringify(persona)}`);

           rl.close();

           fs.writeFile('./persona2.json', JSON.stringify(persona), err =>{
            if(err){
                console.log('Error:',err)
                }
            })
        
            fs.readFile('./persona2.json', 'utf8', (err, jsonString) =>{
                if(err){
                    console.log('Error:', err);
                } else {
                    console.log("Persona:", jsonString);
                }
            })
        
        })

    })

})