import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/courses.models';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { getCourses, getShowForm } from './state/courses.selector';
import { Observable } from 'rxjs';
import { showForm } from './state/courses.action';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Courses[]> | null = null;
  showForm$: Observable<boolean> | null = null;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.courses$ = this.store.select(getCourses);
    this.showForm$ = this.store.select(getShowForm);
  }

  showCreateForm() {
    this.store.dispatch(showForm({ value: true }));
  }
}
