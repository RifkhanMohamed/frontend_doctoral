import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarthComponent } from './earth/earth.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: EarthComponent
  }
];

@NgModule({
  declarations: [
    EarthComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class EarthModule { }
