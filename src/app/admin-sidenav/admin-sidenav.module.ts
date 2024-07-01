import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidenavComponent } from './component/admin-sidenav/admin-sidenav.component';
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
    component: AdminSidenavComponent
  }
];

@NgModule({
  declarations: [
    AdminSidenavComponent
  ],
  exports: [AdminSidenavComponent],
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
export class AdminSidenavModule { }
