import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutInfoModule } from '../about-info/about-info.module';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { RouterModule, Routes } from '@angular/router';
import { MyOrderComponent } from './my-order.component';
import {TableModule} from 'primeng/table';

const routes: Routes = [
  { path: '', component: MyOrderComponent }
];

const imports = [
  TableModule,
  CommonModule,
  AboutInfoModule,
  LoaderModule,
  NavBarModule
];

const components = [MyOrderComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  exports: [components],
})
export class MyOrderModule { }
