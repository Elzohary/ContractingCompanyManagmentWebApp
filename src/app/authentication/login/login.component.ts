import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

loginForm = new FormGroup({
  email: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required)
});

constructor(private router: Router ) {}


handleSubmit(){
  this.router.navigate(['/portal','dashboard']);
}

}