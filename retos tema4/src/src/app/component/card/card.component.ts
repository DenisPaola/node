import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Input() index: number;

  @Output() eventRemoveBook = new EventEmitter<number>();

  constructor() {
    this.index = 1;
    this.book = new Book();
  }

  eliminarBook(id_book: number) {
    this.eventRemoveBook.emit(id_book);
  }
}
