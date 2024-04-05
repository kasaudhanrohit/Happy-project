import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutInfoModule } from '../about-info/about-info.module';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { BadgeModule } from 'primeng/badge';
import { CarouselModule } from 'primeng/carousel';
const routes: Routes = [
  { path: '', component: HomeComponent }
];


const imports = [
  CommonModule,
  AboutInfoModule,
  LoaderModule,
  NavBarModule,
  BadgeModule,
  CarouselModule
];
const components = [HomeComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  exports: [RouterModule, components],
})
export class HomeModule { }
