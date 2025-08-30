import { createAction, props } from '@ngrx/store';

export const showCreateForm = createAction(
  'showCreateCourseForm',
  props<{ value: boolean }>()
);
