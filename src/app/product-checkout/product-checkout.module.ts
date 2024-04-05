import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCheckoutComponent } from './product-checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutInfoModule } from '../about-info/about-info.module';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
const routes: Routes = [
  { path: '', component: ProductCheckoutComponent }
];


const imports = [
  CommonModule,
  AboutInfoModule,
  LoaderModule,
  NavBarModule,
  BadgeModule,
  TableModule,
  AccordionModule,
  FormsModule, 
  ReactiveFormsModule,
  CheckboxModule,
  ToastModule
];
const components = [ProductCheckoutComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  providers: [MessageService],
})
export class ProductCheckoutModule { }
