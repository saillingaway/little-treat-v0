import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatArchiveComponent } from './treat-archive.component';

describe('TreatArchiveComponent', () => {
  let component: TreatArchiveComponent;
  let fixture: ComponentFixture<TreatArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreatArchiveComponent]
    });
    fixture = TestBed.createComponent(TreatArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
