import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutInfoModule } from '../about-info/about-info.module';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { RouterModule, Routes } from '@angular/router';
import { MyCartComponent } from './my-cart.component';
const routes: Routes = [
  { path: '', component: MyCartComponent }
];

const imports = [
  CommonModule,
  AboutInfoModule,
  LoaderModule,
  NavBarModule
];

const components = [MyCartComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  exports: [components],
})
export class MyCartModule { }
