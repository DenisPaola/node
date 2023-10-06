import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private SERVER = 'http://localhost:3000/books';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.SERVER}`);
  }

  getOne(id_book: number): Observable<Book> {
    debugger;
    return this.httpClient.get<Book>(`${this.SERVER}?id=${id_book}`);
  }

  add(book: Book): Observable<any> {
    debugger;
    return this.httpClient.post<any>(`${this.SERVER}`, book);
  }

  edit(book: Book | undefined): Observable<any> {
    debugger;
    return this.httpClient.put<any>(`${this.SERVER}`, book);
  }

  delete(id_book: number): Observable<any> {
    debugger;
    const options = {
      body: { id: id_book }
    };

    return this.httpClient.delete<any>(`${this.SERVER}`, options);
  }

}
