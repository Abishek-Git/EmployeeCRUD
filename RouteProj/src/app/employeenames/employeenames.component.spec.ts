import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeenamesComponent } from './employeenames.component';

describe('EmployeenamesComponent', () => {
  let component: EmployeenamesComponent;
  let fixture: ComponentFixture<EmployeenamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeenamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeenamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
