import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../model/BookModel';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private ROOT_URL = 'http://localhost:4000/api/book';


  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<BookModel> {
    return this.http.get<BookModel>(this.ROOT_URL);
  }

  getBookByID(id: string) {

    return this.http.get<BookModel>(`${this.ROOT_URL}/${id}`);
}

}
