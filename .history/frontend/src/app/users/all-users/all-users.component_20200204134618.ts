import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Observable, from } from 'rxjs';
import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {


  users$: Observable<User[]>;
  constructor( private UserService: UsersService, private route: ActivatedRoute) {}

  id:string;
  user

  ngOnInit() {
    this.users$ = this.UserService.getUsers();
  }

}
