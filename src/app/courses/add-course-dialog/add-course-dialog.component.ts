import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoursesComponent } from '../courses.component';
import { Component, Inject, OnInit } from '@angular/core';
import { Course } from '../../common/models/course';

@Component({
  selector: 'app-add-course-dialog',
  templateUrl: './add-course-dialog.component.html',
  styleUrl: './add-course-dialog.component.scss',
  standalone: false,
})
export class AddCourseDialogComponent implements OnInit  {
  course: Course ;
  constructor(private dialogRef: MatDialogRef<AddCourseDialogComponent>, @Inject(MAT_DIALOG_DATA) data: Course) {
      this.course = data;
  }
  ngOnInit(): void {
   
  }

  save() {
    if (this.course.name == null || this.course.name.trim() == '' || this.course.description == null || this.course.description.trim() == '') {
       return;
    }
    console.log("Save Course", this.course);
    this.dialogRef.close(this.course);
}

close() {
    this.dialogRef.close();
}


}
