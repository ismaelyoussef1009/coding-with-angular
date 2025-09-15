import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {
  addCourse,
  setEditMode,
  setSelectedCourse,
  showForm,
  updateCourse,
} from '../state/courses.action';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getEditMode, getSelectedCourse } from '../state/courses.selector';
import { Courses } from 'src/app/models/courses.models';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;
  editMode: boolean = false;
  course: Courses = null;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(getEditMode).subscribe((value) => {
      this.editMode = value;
    });
    this.init();
    this.subscribeToSelectedCourse();
  }

  init() {
    this.courseForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
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

  subscribeToSelectedCourse() {
    this.store.select(getSelectedCourse).subscribe((data) => {
      this.course = data;
    });

    if (this.editMode && this.course) {
      this, this.courseForm.patchValue(this.course);
    } else {
      this.courseForm.reset();
    }
  }

  hideCreateForm() {
    this.store.dispatch(showForm({ value: false }));
  }

  onOverlayClick(event: MouseEvent) {
    // Only close if the click is on the overlay, not inside modal-content
    if ((event.target as HTMLElement).classList.contains('overlay')) {
      this.hideCreateForm();
    }
  }

  onCreateOrUpdateCourse() {
    if (!this.courseForm.valid) {
      return;
    }

    if (this.editMode) {
      const updatedCourse: Courses = {
        id: this.course.id,
        title: this.courseForm.value.title,
        description: this.courseForm.value.description,
        author: this.courseForm.value.author,
        price: +this.courseForm.value.price,
        image: this.courseForm.value.image,
      };

      // Dispatch update action here
      this.store.dispatch(updateCourse({ course: updatedCourse }));
    } else {
      this.store.dispatch(addCourse({ course: this.courseForm.value }));
    }

    this.hideCreateForm();
    // this.store.dispatch(showForm({ value: false }));
    this.store.dispatch(setEditMode({ editMode: false }));
    this.store.dispatch(setSelectedCourse({ course: null }));

    this.courseForm.reset();
  }

  showTitleValidationErrors() {
    const titleControl = this.courseForm.get('title');

    if (titleControl.touched && !titleControl.valid) {
      if (titleControl.errors['required']) {
        return 'Title is required.';
      }

      if (titleControl.errors['minlength']) {
        return 'Title must be at least 6 characters long.';
      }

      if (titleControl.errors['maxlength']) {
        return 'Title can not be 20 characters long.';
      }
    }
    return '';
  }

  showDescriptionValidationErrors() {
    const descriptionControl = this.courseForm.get('description');
    if (descriptionControl.touched && !descriptionControl.valid) {
      if (descriptionControl.errors['required']) {
        return 'Description is required.';
      }

      if (descriptionControl.errors['minlength']) {
        return 'Description must be at least 10 characters long.';
      }
      if (descriptionControl.errors['maxlength']) {
        return 'Description can not be 5000 characters long.';
      }
    }
    return '';
  }

  showAuthorValidationErrors() {
    const authorControl = this.courseForm.get('author');
    if (authorControl.touched && !authorControl.valid) {
      if (authorControl.errors['required']) {
        return 'Author is required.';
      }
    }
    return '';
  }
}
