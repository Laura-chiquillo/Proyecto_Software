import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/pages/about/about.module').then(
        (m) => m.AboutModule
      ),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./components/auth/registro/registro.module').then(
        (m) => m.RegistroModule
      ),
  },
  {
    path: 'ConciliacionBancaria',
    loadChildren: () =>
      import(
        './components/registroBancario/conciliacion-bancaria/conciliacion-bancaria.module'
      ).then((m) => m.ConciliacionBancariaModule),
  },
  {
    path: 'AgregarCuenta',
    loadChildren: () =>
      import(
        './components/registroBancario/agregar-cuenta/agregar-cuenta.module'
      ).then((m) => m.AgregarCuentaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
