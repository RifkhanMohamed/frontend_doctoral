import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  }
];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    HttpClientModule,
  ]
})
export class HeaderModule { }
