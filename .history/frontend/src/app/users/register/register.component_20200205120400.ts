import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

registerForm = new FormGroup ({

  FistName: new FormGroup(),


});

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

}
