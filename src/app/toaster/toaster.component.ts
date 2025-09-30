import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { setErrorMessage } from '../shared/shared.actions';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  @Input() errorMessage: string = '';
  visible = false;

  ngOnInit(): void {
    // Start with fade-in
    setTimeout(() => {
      this.visible = true;
      // After 5s, start fade-out
      setTimeout(() => {
        this.visible = false;
        // After fade-out, clear error message in store
        setTimeout(() => {
          this.store.dispatch(setErrorMessage({ message: '' }));
        }, 2000); // Wait for fade-out to finish
      }, 5000);
    }, 10); // Small delay to trigger transition
  }
}
