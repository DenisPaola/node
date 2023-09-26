const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

function ReadConsole(callback){

    const persona = {name:'', surname:'', age: 0};

    rl.question('what is your age?', (age) =>{
    persona.age = age;

        rl.question('what is your name?', (name) =>{
        persona.name = name;

            rl.question('what is your surname?', (surname) =>{
            persona.surname = surname;
           
            rl.close();

            callback(persona);

            })

        })

    })

}

module.exports = { ReadConsole };