import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { coursesReducer } from './state/courses.reducer';
import { COURSES_STATE_NAME } from '../constants';

const routes: Routes = [{ path: '', component: CoursesComponent }];

@NgModule({
  declarations: [CoursesComponent, CourseCardComponent, AddCourseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COURSES_STATE_NAME, coursesReducer),
  ],
  exports: [],
})
export class CoursesModule {}
