import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekplanEditComponent } from './weekplan-edit.component';

describe('WeekplanEditComponent', () => {
  let component: WeekplanEditComponent;
  let fixture: ComponentFixture<WeekplanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekplanEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekplanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
