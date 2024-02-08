import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../common/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent {

  @Input() courses: Course[] = [];
  @Output() selectCourse = new EventEmitter();
  @Output() deleteCourse = new EventEmitter();
  @Output() openDialog = new EventEmitter();
}
