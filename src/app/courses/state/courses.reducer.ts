import { createReducer, on } from '@ngrx/store';
import { initialState } from './courses.state';
import {
  addCourse,
  setEditMode,
  setSelectedCourse,
  showForm,
  updateCourse,
} from './courses.action';
import { state } from '@angular/animations';

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
  }),

  on(setEditMode, (state, action) => {
    return { ...state, isEditMode: action.editMode };
  }),

  on(setSelectedCourse, (state, action) => {
    return {
      ...state,
      selectedCourse: action.course,
    };
  }),

  on(updateCourse, (state, action) => {
    const updatedCourses = state.courses.map((c) => {
      if (c.id === action.course.id) {
        return action.course;
      } else {
        return c;
      }
    });
    return {
      ...state,
      courses: updatedCourses,
    };
  })
);
