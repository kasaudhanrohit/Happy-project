import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutInfoComponent } from './about-info.component';
import { RouterModule } from '@angular/router';
const components = [AboutInfoComponent];
const imports = [
  CommonModule, RouterModule
];

@NgModule({
  declarations: [components],
  imports: [
    imports, 
  ],
  exports: [components],
})
export class AboutInfoModule { }
