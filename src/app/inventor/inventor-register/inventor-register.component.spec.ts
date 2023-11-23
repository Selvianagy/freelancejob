import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorRegisterComponent } from './inventor-register.component';

describe('InventorRegisterComponent', () => {
  let component: InventorRegisterComponent;
  let fixture: ComponentFixture<InventorRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorRegisterComponent]
    });
    fixture = TestBed.createComponent(InventorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
