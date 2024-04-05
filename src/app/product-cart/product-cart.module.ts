import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './product-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutInfoModule } from '../about-info/about-info.module';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';
const routes: Routes = [
  { path: '', component: ProductCartComponent }
];


const imports = [
  CommonModule,
  AboutInfoModule,
  LoaderModule,
  NavBarModule,
  BadgeModule,
  TableModule
];
const components = [ProductCartComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ]
})
export class ProductCartModule { }
