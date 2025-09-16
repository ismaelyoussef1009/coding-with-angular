import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Courses } from 'src/app/models/courses.models';
import { AppState } from 'src/app/store/app.state';
import {
  deleteCourse,
  setEditMode,
  setSelectedCourse,
  showForm,
} from '../state/courses.action';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  constructor(private store: Store<AppState>) {}
  @Input() course: Courses | null = null;

  onCourseEdit() {
    this.store.dispatch(showForm({ value: true }));
    this.store.dispatch(setEditMode({ editMode: true }));
    this.store.dispatch(setSelectedCourse({ course: this.course }));
  }

  // come back here to create a notification service
  onCourseDelete() {
    const confirmDelete = confirm(
      'Are you sure you want to delete this course?'
    );
    if (confirmDelete) {
      this.store.dispatch(deleteCourse({ id: this.course?.id }));
    }
  }
}
