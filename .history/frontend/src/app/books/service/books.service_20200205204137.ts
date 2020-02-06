import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {B}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private ROOT_URL = 'http://localhost:4000/api/book';


  constructor(private http: HttpClient) { }

  getAllBooks(): Observable

}
