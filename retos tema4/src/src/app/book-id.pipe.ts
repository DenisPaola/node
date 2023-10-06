import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './models/book';

@Pipe({
  name: 'bookId'
})
export class BookIdPipe implements PipeTransform {

  transform(book: Book,): string {
    return 'Ref-' + book.id;
  }

}
