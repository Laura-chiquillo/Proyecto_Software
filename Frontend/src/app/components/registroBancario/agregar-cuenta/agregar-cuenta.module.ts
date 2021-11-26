import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarCuentaRoutingModule } from './agregar-cuenta-routing.module';
import { AgregarCuentaComponent } from './agregar-cuenta.component';


@NgModule({
  declarations: [
    AgregarCuentaComponent
  ],
  imports: [
    CommonModule,
    AgregarCuentaRoutingModule
  ]
})
export class AgregarCuentaModule { }
