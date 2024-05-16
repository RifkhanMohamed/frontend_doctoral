import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiologyLabComponent } from './biology-lab/biology-lab.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BiologyLabComponent
  }
];

@NgModule({
  declarations: [
    BiologyLabComponent
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
export class BiologyLabModule { }
