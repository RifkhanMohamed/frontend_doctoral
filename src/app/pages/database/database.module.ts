import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseComponent } from './database/database.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';



const routes: Routes = [
  {
    path: '',
    component: DatabaseComponent
  }
];

@NgModule({
  declarations: [
    DatabaseComponent
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
export class DatabaseModule { }
