import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../common/services/courses.service';
import { Course } from '../common/models/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  Courses : Array<Course> = [];

  constructor(private courseService : CoursesService) {}


  ngOnInit() {
    this.getallCourses();
  }

 getallCourses() {
    this.courseService.getCourses().subscribe((data: any) => {
     this.Courses = data;
   })
 }
}
