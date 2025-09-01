import { createReducer, on } from '@ngrx/store';
import { initialState } from './courses.state';
import { addCourse, showForm } from './courses.action';

export const coursesReducer = createReducer(
  initialState,
  on(showForm, (state, action) => {
    return { ...state, showCreateCourseForm: action.value };
  }),

  on(addCourse, (state, action) => {
    const course = { ...action.course };
    course.id = state.courses.length + 1;
    return {
      ...state,
      courses: [...state.courses, course],
    };
  })
);
