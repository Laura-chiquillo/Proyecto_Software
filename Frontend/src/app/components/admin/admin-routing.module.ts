import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegistroComponent } from '../auth/registro/registro.component';
import { LoginComponent } from '../auth/login/login.component';
import { IngresoComponent } from '../auth/ingreso/ingreso.component';

const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [
    { path: '', component: RegistroComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'ingreso', component: IngresoComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
