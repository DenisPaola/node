import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  bookAdded: boolean = false;

  constructor(private booksService: BooksService) {

  }

  addBook(idbook: HTMLInputElement, title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement): void {
    let newBook = new Book(parseInt(idbook.value), 0, title.value, type.value, author.value, parseInt(price.value), photo.value);
    this.booksService.add(newBook).subscribe(
      (book) => {
        debugger;
        this.bookAdded = true
      }
    );
  }
}
