import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeologyLabComponent } from './geology-lab/geology-lab.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: GeologyLabComponent
  }
];

@NgModule({
  declarations: [
    GeologyLabComponent
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
export class GeologyLabModule { }
