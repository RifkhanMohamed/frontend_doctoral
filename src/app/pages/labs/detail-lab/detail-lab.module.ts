import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailLabComponent } from './detail-lab/detail-lab.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: DetailLabComponent
  }
];

@NgModule({
  declarations: [
    DetailLabComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class DetailLabModule { }
