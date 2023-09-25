const fs = require('fs');

function writeAndReadObject(path,obj){

    fs.writeFile(path, JSON.stringify(obj), err =>{
        if(err){
            console.log('Error:',err)
            }
        })
    
        fs.readFile(path, 'utf8', (err, jsonString) =>{
            if(err){
                console.log('Error:', err);
            } else {
                console.log('Persona:', jsonString);
            }
        })
}

module.exports = {writeAndReadObject}