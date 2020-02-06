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

  FistName: new FormControl('', [Validators.required]),
  LastName: new FormControl('', [Validators.required]),
  Age     : new FormControl('', [Validators.required]),
  Email   : new FormControl('', [Validators.required]),
  Password: new FormControl('', [Validators.required])
});

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  userRegister() {
 if (this.registerForm.valid) {
  this.userService.register(this.registerForm.value)
  .subscribe(res)
 }
 else {

 }
  }

}
