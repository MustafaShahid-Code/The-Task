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

  FistName: new FormC('' , [Validators.required]),
  LastName: new FormC('', [Validators.required]),
  Age     : new FormC('', [Validators.required]),
  Email   : new FormC('', [Validators.required]),
  Password: new FormC('', [Validators.required])
});

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

}
