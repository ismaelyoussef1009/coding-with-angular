import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { showCreateForm } from '../state/courses.action';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  constructor(private store: Store<AppState>) {}

  hideCreateForm() {
    this.store.dispatch(showCreateForm({ value: false }));
  }

  onOverlayClick(event: MouseEvent) {
    // Only close if the click is on the overlay, not inside modal-content
    if ((event.target as HTMLElement).classList.contains('overlay')) {
      this.hideCreateForm();
    }
  }
}
