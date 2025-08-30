import { Component, Input } from '@angular/core';
import { courses } from 'src/app/models/courses.models';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input() course: courses | null = null;
}
