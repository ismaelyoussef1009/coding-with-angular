import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SharedState } from './shared/shared.state';
import { AppState } from './store/app.state';
import { getErrorMassage, getIsLoading } from './shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Anguler_NgRX';
  displayLoading$: Observable<boolean>;
  errorMessage$: Observable<string | null>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.displayLoading$ = this.store.select(getIsLoading);
    this.errorMessage$ = this.store.select(getErrorMassage);
  }
}
