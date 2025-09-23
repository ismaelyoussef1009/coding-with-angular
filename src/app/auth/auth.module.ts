import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE } from '../constants';
import { authReducer } from './states/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './states/auth.effects';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STATE, authReducer),
    EffectsModule.forFeature([AuthEffects]),
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class AuthModule {}
