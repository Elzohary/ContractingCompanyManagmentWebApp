import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

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


handleSubmit(){
  alert(this.loginForm.value.password);
}

}





  /* user = {
    email: '',
    password: ''
  };

  onSubmit(loginForm: NgForm) {
    // Check if the form is valid before processing
    if (loginForm.valid) {
      // Here, you can implement the logic to handle the login
      console.log('Login clicked!', this.user);
      // For a real application, you might want to call a service to handle authentication.
    } else {
      // If the form is not valid, display an error message or take appropriate action.
      console.log('Form is not valid. Please check your input.');
    }
  } */