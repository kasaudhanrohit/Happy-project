import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { AdminUserinfoComponent } from './admin-userinfo.component';
const routes: Routes = [
  { path: '', component: AdminUserinfoComponent }
];
const imports = [
  CommonModule,
  LoaderModule,
  NavBarModule
];

const components = [AdminUserinfoComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports,
    RouterModule.forChild(routes)
  ],
  exports: [components],
})
export class AdminUserinfoModule { }
