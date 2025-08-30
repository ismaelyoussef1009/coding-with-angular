import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.state';

export const getCoursesState = createFeatureSelector<CoursesState>('courses');

export const getCourses = createSelector(getCoursesState, (state) => {
  return state.courses;
});

export const showCreateCourseForm = createSelector(getCoursesState, (state) => {
  return state.showCreateCourseForm;
});
