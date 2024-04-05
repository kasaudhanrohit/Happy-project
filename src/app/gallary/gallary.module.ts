import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallaryComponent } from './gallary.component';
import { AboutInfoModule } from '../about-info/about-info.module';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: GallaryComponent }
];

const imports = [
  CommonModule,
  AboutInfoModule,
  LoaderModule,
  NavBarModule
];

const components = [GallaryComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  exports: [components],
})
export class GallaryModule { }
