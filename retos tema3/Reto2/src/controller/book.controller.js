const Book = require('../models/book').Book;

let book = {nombre:'El Jugador', autor:'Fedor Dostoievski', editorial:'salvat'}

function getStart(req, res){

    console.log('User-Agent: ', req.get('User-Agent'));
    console.log('URL: ', req.url);
    console.log('Method: ', req.method);

    let respuesta = {error:true, mensaje:'Punto de Inicio'}
    response.send(respuesta);
}

function getBook(req, res){
    let respuesta;
    if(book != null){
        respuesta = {error:true, codigo: 200, data: book}
    }
    
    else {
       respuesta = {error:false, codigo:200, mensaje:'el libro no existe'}
    }
    res.send(respuesta);
}

function postBook(req, res){
    let respuesta;
    console.log(req.body);

    if(book != null){

        book = new Book(req.body.nombre, req.body.autor, req.body.editorial);
        
        respuesta = { error:false, codigo:200, mensaje: 'libro creado', data: book};
    } else {
        respuesta = {error: true, codigo:200, mensaje:'el libro no existe'};
    }
    res.send(respuesta);

}

function putBook(req, res){
    let respuesta;
    console.log(req.body);

    if(book != null){

        book.nombre = req.body.nombre;
        book.autor = req.body.autor;
        book.editorial = req.body.editorial;
        respuesta = {error:false, codigo:200, mensaje: 'libro actualizado', data:book};
    }
    else {

        respuesta = { error: true, codigo:200, mensaje:'el libro no existe'}
    }
    res.send(respuesta);

}


function deleteBook(req, res){
    
    let respuesta;
    if (book = null){
        book != null;

        respuesta = {error:false, codigo:200, mensaje:'libro borrado', data: book };
    }
    else{

        respuesta = {error:true, codigo:200, mensaje:'El libro no existe', data: book};
    }
    res.send(respuesta);
}


module.exports = {getStart, getBook, postBook, putBook, deleteBook}