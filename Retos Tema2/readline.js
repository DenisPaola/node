const fs = require('fs/promises');
const readline = require('readline');

const person = { name: '', surname: '', age: 0 };

question('What is your age? ').then((age) => {
    person.age = age;

    question('What is your name? ').then((name) => {
        person.name = name;

        question('What is your surname? ').then((surname) => {
            person.surname = surname;

            fs.writeFile('./persona.json', JSON.stringify(person))
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
        });
    })

})

function question(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface(process.stdin, process.stdout);
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}


