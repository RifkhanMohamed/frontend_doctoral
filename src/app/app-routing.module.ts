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
  { path: 'physical-matter-sciences', loadChildren: () => import('./pages/research/physical/physical.module').then(e => e.PhysicalModule)},
  { path: 'matterial-sciences-chemistery', loadChildren: () => import('./pages/research/chemistry/chemistry.module').then(e => e.ChemistryModule)},
  { path: 'applied-mathematics-sciences', loadChildren: () => import('./pages/research/applied/applied.module').then(e => e.AppliedModule)},
  { path: 'earth-and-universe-sciences', loadChildren: () => import('./pages/research/earth/earth.module').then(e => e.EarthModule)},
  { path: 'life-and-health-sciences', loadChildren: () => import('./pages/research/life/life.module').then(e => e.LifeModule)},
  { path: 'computer-sciences', loadChildren: () => import('./pages/research/computer/computer.module').then(e => e.ComputerModule)},
  { path: 'presentation', loadChildren: () => import('./pages/center/presentation/presentation.module').then(e => e.PresentationModule)},
  { path: 'doctoral-training', loadChildren: () => import('./pages/center/training/training.module').then(e => e.TrainingModule)},
  { path: 'ced', loadChildren: () => import('./pages/center/ced/ced.module').then(e => e.CedModule)},
  { path: 'biology-lab', loadChildren: () => import('./pages/labs/biology-lab/biology-lab.module').then(e => e.BiologyLabModule)},
  { path: 'chemistry-lab', loadChildren: () => import('./pages/labs/chemistry-lab/chemistry-lab.module').then(e => e.ChemistryLabModule)},
  { path: 'geology-lab', loadChildren: () => import('./pages/labs/geology-lab/geology-lab.module').then(e => e.GeologyLabModule)},
  { path: 'computer-lab', loadChildren: () => import('./pages/labs/computer-lab/computer-lab.module').then(e => e.ComputerLabModule)},
  { path: 'maths-lab', loadChildren: () => import('./pages/labs/maths-lab/maths-lab.module').then(e => e.MathsLabModule)},
  { path: 'physical-lab', loadChildren: () => import('./pages/labs/physical-lab/physical-lab.module').then(e => e.PhysicalLabModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
