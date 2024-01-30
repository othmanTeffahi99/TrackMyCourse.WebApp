import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { EMPTY } from 'rxjs';

const emptyCourse: Course = {
  id: 0,
  title: '',
  description:'',
  progress: 0,
  favorite: false,
  completed: false
}




@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  standalone: false
})
export class CoursesComponent implements OnInit {
  courses :Course[] = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      progress: 26,
      favorite: true,
      completed: false
    },
    {
      id: 2,
      title: 'React Basics',
      description: 'Introduction to the fundamentals of React',
      progress: 50,
      favorite: true,
      completed: false
    },
    {
      id: 3,
      title: 'Vue.js Advanced Concepts',
      description: 'Explore advanced concepts and features in Vue.js',
      progress: 77,
      favorite: true,
      completed: false
    },
    {
      id: 4,
      title: 'Node.js for Beginners',
      description: 'A beginner-friendly guide to Node.js development',
      progress: 100,
      favorite: true,
      completed: false
    }
  ];

  constructor() { }

 selectedCourse: Course = emptyCourse;
 originalTitla: string = '';

 selectCourse(course : any = null )
 {
    this.originalTitla = course.title;
    this.selectedCourse  = {...course};
 }

 deleteCourse(courseId: any){
  console.log("DELETE COURSE",courseId);
 }

 saveCourse(course:any): void{
      console.log("Save Changes",course);
 }

 reset() : void{
  this.selectCourse({...emptyCourse});
 }

  ngOnInit(): void {
  } 

}