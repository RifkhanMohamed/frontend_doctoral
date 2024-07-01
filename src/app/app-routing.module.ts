import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'forbidden', loadChildren: () => import('./forbidden/forbidden.module').then(e => e.ForbiddenModule)},
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
  { path: 'detail-lab', loadChildren: () => import('./pages/labs/detail-lab/detail-lab.module').then(e => e.DetailLabModule)},
  { path: 'database', loadChildren: () => import('./pages/database/database.module').then(e => e.DatabaseModule)},
  { path: 'admin-register', loadChildren: () => import('./admin/admin.module').then(e => e.AdminModule),canActivate:[AuthGuard],data:{roles:['super_admin','committee','dean','director','laboratory_manager','service_admin','structure_manager','thesis_director']}},
  { path: 'users', loadChildren: () => import('./users/users.module').then(e => e.UsersModule),canActivate:[AuthGuard],data:{roles:['super_admin','committee','dean','director','laboratory_manager','service_admin','structure_manager','thesis_director']}},
  { path: 'admin-home', loadChildren: () => import('./admin-home/admin-home.module').then(e => e.AdminHomeModule),canActivate:[AuthGuard],data:{roles:['super_admin','committee','dean','director','laboratory_manager','service_admin','structure_manager','thesis_director']}},
  { path: 'admin-pre-register', loadChildren: () => import('./admin-pre-register/admin-pre-register.module').then(e => e.AdminPreRegisterModule),canActivate:[AuthGuard],data:{roles:['super_admin','committee']}},
  { path: 'admin-pre-select', loadChildren: () => import('./admin-pre-selected/admin-pre-selected.module').then(e => e.AdminPreSelectedModule),canActivate:[AuthGuard],data:{roles:['super_admin','committee']}},
  { path: 'admin-post-competition', loadChildren: () => import('./admin-post-competition/admin-post-competition.module').then(e => e.AdminPostCompetitionModule),canActivate:[AuthGuard],data:{roles:['super_admin','committee','thesis_director']}},
  { path: 'admin-thesis-director-validated', loadChildren: () => import('./admin-thesis-director-validated/admin-thesis-director-validated.module').then(e => e.AdminThesisDirectorValidatedModule),canActivate:[AuthGuard],data:{roles:['super_admin','structure_manager']}},
  
  {path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
