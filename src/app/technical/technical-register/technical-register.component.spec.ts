import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalRegisterComponent } from './technical-register.component';

describe('TechnicalRegisterComponent', () => {
  let component: TechnicalRegisterComponent;
  let fixture: ComponentFixture<TechnicalRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalRegisterComponent]
    });
    fixture = TestBed.createComponent(TechnicalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
