const modReadConsole = require('./readConsole');
const modWriteAndRead= require('./writeAndReadObject');

function CrearPersona(persona){

    modWriteAndRead.writeAndReadObject('./Persona.json', persona)
}

modReadConsole.ReadConsole(CrearPersona);



