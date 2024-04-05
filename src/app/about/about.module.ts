import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutInfoModule } from '../about-info/about-info.module';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
const routes: Routes = [
  { path: '', component: AboutComponent }
];
const imports = [
  CommonModule,
  AboutInfoModule,
  LoaderModule,
  NavBarModule
];

const components = [AboutComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports,
    RouterModule.forChild(routes)
  ],
  exports: [components],
})
export class AboutModule { }
