import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:5170/api';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  model = 'courses';

  constructor(private httpClient: HttpClient) { }


  public getCourses() {
    return this.httpClient.get(this.getUrl());
  }

  public getCourse(courseId: number) {

    return this.httpClient.get(this.getUrlWithId(courseId));
  }

  public createCourse(course: Course) {
    return this.httpClient.post(this.getUrl(), course);
  }

  public updateCourse(course: Course) {

    return this.httpClient.put(this.getUrlWithId(course.id), course);
  }

  public deleteCourse(courseId: number) {

    return this.httpClient.delete(this.getUrlWithId(courseId));
  }

  private getUrlWithId(id: number) {

    return `${BASE_URL}/${this.model}/${id}`;
  }
  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }
}
