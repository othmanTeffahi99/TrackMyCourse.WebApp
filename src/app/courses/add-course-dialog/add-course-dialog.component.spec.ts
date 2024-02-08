import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseDialogComponent } from './add-course-dialog.component';

describe('AddCourseDialogComponent', () => {
  let component: AddCourseDialogComponent;
  let fixture: ComponentFixture<AddCourseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCourseDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCourseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
