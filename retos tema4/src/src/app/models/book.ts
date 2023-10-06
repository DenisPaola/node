export class Book {

    public id: number;
    public id_user: number;
    public title: string;
    public type: string;
    public author: string;
    public price: number;
    public photo: string;

    constructor(id: number = 0,
        id_user: number = 0,
        title: string = '',
        type: string = '',
        author: string = '',
        price: number = 0,
        photo: string = '') {

        this.id = id;
        this.id_user = id_user;
        this.title = title;
        this.type =type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    
    }
}
