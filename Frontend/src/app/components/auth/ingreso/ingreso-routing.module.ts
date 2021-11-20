import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: IngresoComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
    exports: [RouterModule]
})
export class IngresoRoutingModule { }
