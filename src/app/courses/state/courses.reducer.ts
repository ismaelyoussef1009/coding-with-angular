import { createReducer, on } from '@ngrx/store';
import { initialState } from './courses.state';
import { showCreateForm } from './courses.action';

export const coursesReducer = createReducer(
  initialState,
  on(showCreateForm, (state, action) => {
    return { ...state, showCreateCourseForm: action.value };
  })
);
