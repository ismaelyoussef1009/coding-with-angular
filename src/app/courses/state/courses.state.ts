import { courses } from 'src/app/models/courses.models';

export interface CoursesState {
  courses: courses[];
  showCreateCourseForm: boolean;
}

export const initialState: CoursesState = {
  courses: [
    {
      id: 1,
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework.',
      image: 'assets/images/react-js.png',
      author: 'John Doe',
      price: 49.99,
    },
    {
      id: 2,
      title: 'Advanced TypeScript',
      description: 'Deep dive into TypeScript features and best practices.',
      image: 'assets/images/js.png',
      author: 'John Doe',
      price: 49.99,
    },
    // {
    //   id: 3,
    //   title: 'Advanced TypeScript',
    //   description: 'Deep dive into TypeScript features and best practices.',
    //   image: 'assets/images/js.png',
    //   author: 'John Doe',
    //   price: 49.99,
    // },

    // {
    //   id: 4,
    //   title: 'Advanced TypeScript',
    //   description: 'Deep dive into TypeScript features and best practices.',
    //   image: 'assets/images/js.png',
    //   author: 'John Doe',
    //   price: 49.99,
    // },
  ],

  showCreateCourseForm: false,
};
