import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private UserService: UsersService, private route: ActivatedRoute) { }
  id: string;
  user: User;
  userSub$: Subscription;
  ngOnInit() {
  }

}
