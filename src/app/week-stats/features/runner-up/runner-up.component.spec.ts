import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerUpComponent } from './runner-up.component';

describe('RunnerUpComponent', () => {
  let component: RunnerUpComponent;
  let fixture: ComponentFixture<RunnerUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunnerUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
