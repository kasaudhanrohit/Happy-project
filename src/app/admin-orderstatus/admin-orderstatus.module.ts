import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrderstatusComponent } from './admin-orderstatus.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AdminUserinfoModule } from '../admin-userinfo/admin-userinfo.module';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
const routes: Routes = [
  { path: '', component: AdminOrderstatusComponent }
];
const imports = [
  ChartModule,
  CardModule,
  AdminUserinfoModule,
  InputTextModule,
  DialogModule,
  TableModule,
  FormsModule,
  ButtonModule,
  ReactiveFormsModule,
  CalendarModule,
  CommonModule,
  ConfirmDialogModule
];

const components = [AdminOrderstatusComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports,
    RouterModule.forChild(routes)
  ],
  exports: [components],
})
export class AdminOrderstatusModule { }
