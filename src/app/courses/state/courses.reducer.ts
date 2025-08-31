import { createReducer, on } from '@ngrx/store';
import { initialState } from './courses.state';
import { addCourse, showCreateForm } from './courses.action';

export const coursesReducer = createReducer(
  initialState,
  on(showCreateForm, (state, action) => {
    return { ...state, showCreateCourseForm: action.value };
  }),

  on(addCourse, (state, { course }) => {
    return {
      ...state,
      courses: [...state.courses, course],
    };
  })
);
