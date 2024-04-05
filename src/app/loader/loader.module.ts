import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';

const imports = [
  CommonModule
];
const components = [LoaderComponent];



@NgModule({
  declarations: [components],
  imports: [
    imports
  ],
  exports: [components],
})
export class LoaderModule { }
