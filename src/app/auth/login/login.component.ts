import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  loginForm: FormGroup;
  loggedInUser: User;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      // Define form controls here
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(
      (response) => {
        this.loggedInUser = response;
      },
      (error) => {
        this.loggedInUser = error;
      }
    );
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
