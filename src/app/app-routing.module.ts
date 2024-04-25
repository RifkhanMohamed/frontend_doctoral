import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(e => e.HomeModule)},
  { path: 'header', loadChildren: () => import('./header/header.module').then(e => e.HeaderModule)},
  { path: 'footer', loadChildren: () => import('./footer/footer.module').then(e => e.FooterModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(e => e.LoginModule)},
  { path: 'register', loadChildren: () => import('./register/register.module').then(e => e.RegisterModule)},
  { path: 'wish', loadChildren: () => import('./wish/wish.module').then(e => e.WishModule)},
  { path: 'modify-wish', loadChildren: () => import('./modify-wish/modify-wish.module').then(e => e.ModifyWishModule)},
  { path: 'edit-wish', loadChildren: () => import('./edit-wish/edit-wish.module').then(e => e.EditWishModule)},
  { path: 'course', loadChildren: () => import('./course/course.module').then(e => e.CourseModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
