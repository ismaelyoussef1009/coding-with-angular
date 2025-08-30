import { Component, OnInit } from '@angular/core';
import { courses } from '../models/courses.models';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { getCourses } from './state/courses.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<courses[]> | null = null;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.courses$ = this.store.select(getCourses);
  }
}
