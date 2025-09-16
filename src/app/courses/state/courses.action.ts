import { createAction, props } from '@ngrx/store';
import { Courses } from 'src/app/models/courses.models';

export const showForm = createAction(
  ' [courses]  show create course form',
  props<{ value: boolean }>()
);

export const addCourse = createAction(
  ' [courses] add course',
  props<{ course: Courses }>()
);

export const setEditMode = createAction(
  ' [courses]  set edit mode',
  props<{ editMode: boolean }>()
);

export const setSelectedCourse = createAction(
  ' [courses] set selected course',
  props<{ course: Courses }>()
);

export const updateCourse = createAction(
  ' [courses] update course',
  props<{ course: Courses }>()
);

export const deleteCourse = createAction(
  '[courses] delete Course',
  props<{ id: number }>()
);
