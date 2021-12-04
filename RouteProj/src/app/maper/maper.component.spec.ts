import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaperComponent } from './maper.component';

describe('MaperComponent', () => {
  let component: MaperComponent;
  let fixture: ComponentFixture<MaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
