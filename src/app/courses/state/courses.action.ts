import { createAction, props } from '@ngrx/store';
import { courses } from 'src/app/models/courses.models';

export const showCreateForm = createAction(
  'showCreateCourseForm',
  props<{ value: boolean }>()
);

export const addCourse = createAction(
  '[Courses] Add Course',
  props<{ course: courses }>()
);
