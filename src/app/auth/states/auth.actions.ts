import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.models';

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const signupStart = createAction(
  '[Auth] signup Start',
  props<{ email: string; password: string }>()
);

export const signupSuccess = createAction(
  '[Auth] signup Success',
  props<{ user: User }>()
);
