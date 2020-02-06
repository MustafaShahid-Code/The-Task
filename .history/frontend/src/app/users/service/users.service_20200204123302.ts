import { Injectable } from '@angular/core';
import { Http }

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private ROOT_URL = 'http://localhost:4000/api/users';
  constructor( private http: Ht) {}
}
