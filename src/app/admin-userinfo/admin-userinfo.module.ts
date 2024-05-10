import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { AdminUserinfoComponent } from './admin-userinfo.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';

const routes: Routes = [
  { path: '', component: AdminUserinfoComponent }
];
const imports = [
  TableModule,
  FormsModule,
  ButtonModule,
  ReactiveFormsModule,
  CalendarModule,
  CommonModule,
  LoaderModule,
  NavBarModule
];

const components = [AdminUserinfoComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports
  ],
  exports: [components],
})
export class AdminUserinfoModule { }
