import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { IngresoComponent } from './ingreso.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { IngresoRoutingModule } from './ingreso-routing.module';

@NgModule({
  declarations: [
    IngresoComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    IngresoRoutingModule,
    FormsModule,
    FormArray,
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IngresoModule { }
