import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegistroComponent } from '../auth/registro/registro.component';
import { LoginComponent } from '../auth/login/login.component';
import { ConciliacionBancariaComponent} from '../registroBancario/conciliacion-bancaria/conciliacion-bancaria.component';

const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [
    { path: '', component: RegistroComponent, },
    { path: 'ConciliacionBancaria', component: ConciliacionBancariaComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
