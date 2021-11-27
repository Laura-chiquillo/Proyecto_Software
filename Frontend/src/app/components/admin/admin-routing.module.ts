import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegistroComponent } from '../auth/registro/registro.component';
import { LoginComponent } from '../auth/login/login.component';
import { ConciliacionBancariaComponent} from '../registroBancario/conciliacion-bancaria/conciliacion-bancaria.component';
import { AgregarCuentaComponent } from '../registroBancario/agregar-cuenta/agregar-cuenta.component';
const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [
    { path: '', component: RegistroComponent, },
    { path: 'ConciliacionBancaria', component: ConciliacionBancariaComponent },
    { path: 'AgregarCuenta', component: AgregarCuentaComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
