import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutInfoModule } from '../about-info/about-info.module';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { ProductComponent } from './product.component';
import { BadgeModule } from 'primeng/badge';
const routes: Routes = [
  { path: '', component: ProductComponent }
];


const imports = [
  CommonModule,
  AboutInfoModule,
  LoaderModule,
  NavBarModule,
  BadgeModule
];
const components = [ProductComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  exports: [RouterModule, components],
})
export class ProductModule { }
