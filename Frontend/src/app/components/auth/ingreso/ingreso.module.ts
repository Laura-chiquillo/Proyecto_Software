import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './ingreso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IngresoRoutingModule } from './ingreso-routing.module';

@NgModule({
  declarations: [
    IngresoComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    IngresoRoutingModule,
    FormsModule,
  ]
})
export class IngresoModule { }
