import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutInfoModule } from '../about-info/about-info.module';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { BadgeModule } from 'primeng/badge';
const routes: Routes = [
  { path: '', component: ProductDetailComponent }
];


const imports = [
  CommonModule,
  AboutInfoModule,
  LoaderModule,
  NavBarModule,
  BadgeModule
];
const components = [ProductDetailComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ]
})
export class ProductDetailModule { }
