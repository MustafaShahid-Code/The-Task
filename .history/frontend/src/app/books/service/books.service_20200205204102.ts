import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private ROOT_URL = 'http://localhost:4000/api/book';


  constructor(private http: HttpClient) { }

  

}
