import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { AboutInfoModule } from '../about-info/about-info.module';
import { LoaderModule } from '../loader/loader.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
const routes: Routes = [
  { path: '', component: ContactComponent }
];
const imports = [
  CommonModule,
  AboutInfoModule,
  NavBarModule,
  LoaderModule
];

const components = [ContactComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  exports: [components],
})
export class ContactModule { }
