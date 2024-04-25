import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditWishComponent } from './component/edit-wish/edit-wish.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EditWishComponent
  }
];

@NgModule({
  declarations: [
    EditWishComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule
  ]
})
export class EditWishModule { }
