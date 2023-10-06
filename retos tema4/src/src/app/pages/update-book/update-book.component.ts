import { Component } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  bookUpdated: boolean = false;
  bookNoFinded: boolean = false;

  constructor(private booksService: BooksService) { }

  updateBook(idbook: HTMLInputElement, title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement): void {

    const book = new Book(parseInt(idbook.value), 0, title.value, type.value, author.value, parseInt(price.value), photo.value);

    this.booksService.edit(book).subscribe(
      (response) => {
        debugger;
        if (response?.data) {
          this.bookUpdated = true;
        }else{
          this.bookNoFinded = false;
        }

      }
    );
  }
}
