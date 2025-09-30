import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess } from './auth.actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setErrorMessage, setIsLoading } from 'src/app/shared/shared.actions';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        this.store.dispatch(setIsLoading({ isLoading: true }));
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            return loginSuccess({ user: data });
          }),

          catchError((errorResponse) => {
            //console.log(errorResponse);

            this.store.dispatch(setIsLoading({ isLoading: false }));
            const errorMessage =
              this.authService.getErrorMessage(errorResponse);
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  // Effect to handle redirection after successful login

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap((action) => {
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );
}
