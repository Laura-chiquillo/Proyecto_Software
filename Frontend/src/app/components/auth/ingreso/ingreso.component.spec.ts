import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { IngresoComponent } from './ingreso.component';

describe('IngresoComponent', () => {
  let component: IngresoComponent;
  let fixture: ComponentFixture<IngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngresoComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
