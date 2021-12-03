import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Grafico1RoutingModule } from './grafico1-routing.module';
import { Grafico1Component } from './grafico1.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    Grafico1Component
  ],
  imports: [
    CommonModule,
    Grafico1RoutingModule,
    ChartsModule
  ]
})
export class Grafico1Module { }
