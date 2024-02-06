import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../common/models/course';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrl: './courses-details.component.scss',
  standalone: false
})
export class CoursesDetailsComponent {

   @Input() selectedCourse!: Course;
  @Output() updateCourse = new EventEmitter();
   @Output() reset = new EventEmitter();
}
