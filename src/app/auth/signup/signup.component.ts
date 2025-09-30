import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { signupStart } from '../states/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSignup() {
    const { email, password } = this.signupForm.value;
    this.store.dispatch(signupStart({ email, password }));
  }

  validateEmail() {
    const email = this.signupForm.get('email');
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
    const password = this.signupForm.get('password');
    if (!password.valid && password.touched) {
      if (password.errors?.['required']) {
        return 'Password is required';
      }
    }
    return '';
  }
}
