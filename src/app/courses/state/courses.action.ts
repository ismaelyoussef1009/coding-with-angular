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

export const setEditMode = createAction(
  'setEditMode',
  props<{ editMode: boolean }>()
);

export const setSelectedCourse = createAction(
  'setSelectedCourse',
  props<{ course: Courses }>()
);

export const updateCourse = createAction(
  'updateCourse',
  props<{ course: Courses }>()
);
