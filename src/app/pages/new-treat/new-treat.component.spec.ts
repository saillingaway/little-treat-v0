import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTreatComponent } from './new-treat.component';

describe('NewTreatComponent', () => {
  let component: NewTreatComponent;
  let fixture: ComponentFixture<NewTreatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTreatComponent]
    });
    fixture = TestBed.createComponent(NewTreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
