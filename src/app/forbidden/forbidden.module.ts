import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ForbiddenComponent
  }
];

@NgModule({
  declarations: [
    ForbiddenComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    HttpClientModule,
  ]
})
export class ForbiddenModule { }
