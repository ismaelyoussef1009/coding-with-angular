import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FIREBASE_API_KEY } from 'src/app/constants';
import { User } from 'src/app/models/user.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
    const body = { email, password, returnSecureToken: true };
    return this.http.post<User>(url, body);
  }

  signup(email: string, password: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
    const body = { email, password, returnSecureToken: true };
    return this.http.post<User>(url, body);
  }

  getErrorMessage(errorResponse: HttpErrorResponse) {
    let message = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return message;
    }
    switch (errorResponse.error.error.message) {
      case 'INVALID_LOGIN_CREDENTIALS':
        message = 'the email or password is incorrect.';
        break;

      case 'EMAIL_NOT_FOUND':
        message = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        message = 'The password is incorrect.';
        break;
      case 'USER_DISABLED':
        message = 'The user account has been disabled.';
        break;

      case 'EMAIL_EXISTS':
        message = 'This email already exists.';
        break;

      default:
        message = errorResponse.error.error.message;
    }
    return message;
  }
}
