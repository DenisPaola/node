class Book {

    constructor(nombre, autor, editorial){
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;
    }

    getNombre(nombre){
        this.nombre = nombre;
    }

    setAuthor(autor){
        this.autor = autor;
    }

    setEditorial(editorial){
        this.editorial = editorial;
    }
}

module.exports = { Book };