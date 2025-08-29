import { courses } from 'src/app/models/courses.models';

export interface CoursesState {
  courses: courses[];
}

// export const initialState: CoursesState = {
//   courses: [],
// };

export const initialState: CoursesState = {
  courses: [],
};
