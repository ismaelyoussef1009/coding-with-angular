import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      // Define form controls here
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  validateEmail() {
    const email = this.loginForm.get('email');
    if (!email.valid && email.touched) {
      if (email.errors?.['required']) {
        return 'Email is required.';
      }
      if (email.errors?.['email']) {
        return 'Invalid email address.';
      }
    }
    return '';
  }

  validatePassword() {
    const password = this.loginForm.get('password');
    if (!password.valid && password.touched) {
      if (password.errors?.['required']) {
        return 'Password is required';
      }
    }
    return '';
  }
}
