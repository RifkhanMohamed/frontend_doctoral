import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'header', loadChildren: () => import('./header/header.module').then(e => e.HeaderModule)},
  { path: 'footer', loadChildren: () => import('./footer/footer.module').then(e => e.FooterModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(e => e.LoginModule)},
  { path: 'register', loadChildren: () => import('./register/register.module').then(e => e.RegisterModule)},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
