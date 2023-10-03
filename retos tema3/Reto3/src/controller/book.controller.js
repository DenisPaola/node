const Book = require('../models/book').Book

let arrayBook = []

function getBooks(req,res)
{
    let respuesta;
    console.log(req.params);
    const id = req.params.id;

    if (id) {
        respuesta = arrayBook.filter((book) => book.id === id);
    } else {
        respuesta = arrayBook;
    }
    response.send(respuesta)
}

function postBooks(req, res)
{
    let respuesta;
    console.log(req.body);

    const id = req.body.id;
    const array = arrayBook.filter((book) => book.id === id);
    if(array.length ===0){
        const book = new Book(id, 
            req.body.title, 
            req.body.author,
            req.body.price,
            req.body.type);
        
        arrayBook.push(book);

        respuesta = { error:false, codigo: 200, mensaje:'libro creado', data: book }
    } else {
        respuesta = { error:false, codigo: 200, mensaje:'el libro existe'};
    }
    response.send(respuesta);
}

function putBooks(req,res) 
{
    let respuesta;
    console.log(request.body);

    const id = request.body.id;
    const array = arrayBook.filter((book) => book.id === id);
    if (array.length === 1)
    {
        const book = arrayBook[0];
        book.title = req.body.tittle;
        book.author = req.body.author;
        book.price = req.body.price;
        book.type = req.body.type;

        respuesta = {error: false, codigo: 200, mensaje: 'libro actualizado', data: book}
    } else {
        respuesta = {error: false, codigo: 200, mensaje:'el libro no existe'};
    }
    response.send(respuesta);
}


function deleteBooks(req, res) 
{
    console.log(req.body);
    let respuesta;
    let index = -1;
    const id = req.body.id;

    arrayBook.forEach((book, i) => {
        if (book.id === id) {
            index = i;
        }
    });

    if (index !== -1){
        book = arrayBook[i];
        respuesta = {error: false, codigo: 200, mensaje: 'libro borrado', data: book };
    } else {
        respuesta = { error: false, codigo: 200, mensaje: 'el libro no existe'};
    }
    response.send(respuesta);

}



module.exports = {getBooks, postBooks, putBooks, deleteBooks}