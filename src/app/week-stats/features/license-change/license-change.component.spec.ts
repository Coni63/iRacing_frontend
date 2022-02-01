import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseChangeComponent } from './license-change.component';

describe('LicenseChangeComponent', () => {
  let component: LicenseChangeComponent;
  let fixture: ComponentFixture<LicenseChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
