import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private ROOT_URL = 'http://localhost:4000/api/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.ROOT_URL);
  }

  getUserByID()
  {
      re
  }

}
