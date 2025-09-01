import { createAction, props } from '@ngrx/store';
import { Courses } from 'src/app/models/courses.models';

export const showForm = createAction(
  'showCreateCourseForm',
  props<{ value: boolean }>()
);

export const addCourse = createAction(
  'addCourse',
  props<{ course: Courses }>()
);
