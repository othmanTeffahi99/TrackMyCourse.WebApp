import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { EMPTY } from 'rxjs';
import { CoursesService } from '../common/services/courses.service';

const emptyCourse: Course = {
  id: 0,
  name: '',
  description: '',
  progress: 0,
  isFavorite: false,
  isCompleted: false,
  updatedAt: new Date()
}




@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  standalone: false
})
export class CoursesComponent implements OnInit {


  courses: Course[] = [];
  selectedCourse: Course = emptyCourse;
  originalTitla: string = '';

  constructor(private courseService: CoursesService) { }



  selectCourse(course: Course): void {
    this.originalTitla = course.name;
    this.selectedCourse = { ...course };
  }

  deleteCourse(courseId: number): void {
    console.log("DELETE COURSE", courseId);
    this.courseService.deleteCourse(courseId).subscribe((result:any)  => {
      console.log("Result", result);
    });
  }

  updateCourse(course: Course): void {
    console.log("Update Course", course);
    this.courseService.updateCourse(course).subscribe((result:any)  => {
      console.log("Result", result);
    });
  }

  getAllCourses(): void {
    this.courseService.getCourses().subscribe((result:any)  => {
      this.courses = result as Course[];
      console.log("Result", result);
    });
  }


  CreateCourse(course: Course): void {
    console.log("Save Changes", course);
    this.courseService.createCourse(course).subscribe((result:any) => {
      console.log("Result", result);
    });
  }

  reset(): void {
    this.selectCourse({ ...emptyCourse });
  }

  ngOnInit(): void {

    this.getAllCourses();

  }

}