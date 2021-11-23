import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GastoRoutingModule } from './gasto-routing.module';
import { GastoComponent } from './gasto.component';


@NgModule({
  declarations: [
    GastoComponent
  ],
  imports: [
    CommonModule,
    GastoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GastoModule { }
