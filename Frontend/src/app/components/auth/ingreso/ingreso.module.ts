import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './ingreso.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { IngresoRoutingModule } from './ingreso-routing.module';

@NgModule({
  declarations: [
    IngresoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IngresoRoutingModule,
  ]
})
export class IngresoModule { }
