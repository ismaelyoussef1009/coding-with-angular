import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addCourse, showCreateForm } from '../state/courses.action';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.courseForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ]),

      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5000),
      ]),

      author: new FormControl(null, [Validators.required]),

      price: new FormControl(null),
      image: new FormControl(null),
    });
  }

  hideCreateForm() {
    this.store.dispatch(showCreateForm({ value: false }));
  }

  onOverlayClick(event: MouseEvent) {
    // Only close if the click is on the overlay, not inside modal-content
    if ((event.target as HTMLElement).classList.contains('overlay')) {
      this.hideCreateForm();
    }
  }

  onCreateCourse() {
    console.log(this.courseForm.value);

    if (this.courseForm.valid) {
      this.store.dispatch(addCourse({ course: this.courseForm.value }));
      this.hideCreateForm();
      this.courseForm.reset();
    }
  }
}
