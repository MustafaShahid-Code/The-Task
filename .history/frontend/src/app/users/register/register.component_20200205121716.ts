import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

registerForm = new FormGroup ({

  FistName: new Form('' , [Validators.required]),
  LastName: new FormGroup('', [Validators.required]),
  Age     : new FormGroup('', [Validators.required]),
  Email   : new FormGroup('', [Validators.required]),
  Password: new FormGroup('', [Validators.required])
});

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

}
