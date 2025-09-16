import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.state';
import { COURSES_STATE_NAME } from 'src/app/constants';

export const getCoursesState =
  createFeatureSelector<CoursesState>(COURSES_STATE_NAME);

export const getCourses = createSelector(getCoursesState, (state) => {
  return state.courses;
});

export const getShowForm = createSelector(getCoursesState, (state) => {
  return state.showCreateCourseForm;
});

export const getEditMode = createSelector(getCoursesState, (state) => {
  return state.isEditMode;
});

export const getSelectedCourse = createSelector(getCoursesState, (state) => {
  return state.selectedCourse;
});
