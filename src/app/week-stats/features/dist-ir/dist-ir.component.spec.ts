import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistIrComponent } from './dist-ir.component';

describe('DistIrComponent', () => {
  let component: DistIrComponent;
  let fixture: ComponentFixture<DistIrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistIrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistIrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
