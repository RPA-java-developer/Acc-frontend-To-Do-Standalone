import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateTaskPagePage } from './update-task-page.page';

describe('UpdateTaskPagePage', () => {
  let component: UpdateTaskPagePage;
  let fixture: ComponentFixture<UpdateTaskPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
