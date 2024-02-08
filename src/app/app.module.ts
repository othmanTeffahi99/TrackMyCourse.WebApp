import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from "./courses/courses-list/courses-list.component";
import { CoursesDetailsComponent } from './courses/courses-details/courses-details.component';
import { AddCourseDialogComponent } from './courses/add-course-dialog/add-course-dialog.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CoursesComponent, CoursesListComponent, CoursesDetailsComponent, AddCourseDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatDialogModule,
    HttpClientModule
  ]
})
export class AppModule {}
