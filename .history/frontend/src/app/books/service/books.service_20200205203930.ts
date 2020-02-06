import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private ROOT_URL = 'http://localhost:4000/api/books';

  constructor() { }
}
