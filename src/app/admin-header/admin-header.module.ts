import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


const routes: Routes = [
  {
    path: '',
    component: AdminHeaderComponent
  }
];

@NgModule({
  declarations: [
    AdminHeaderComponent
  ],
  exports: [AdminHeaderComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ]
})
export class AdminHeaderModule { }
