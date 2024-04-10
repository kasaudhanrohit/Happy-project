import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router'; 
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const imports = [
  CommonModule,
  BadgeModule,
  RouterModule,
  OverlayPanelModule,
  ListboxModule,
  AutoCompleteModule,
  ReactiveFormsModule,
  FormsModule
];
const components = [NavBarComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports
  ],
  exports: [components],
})
export class NavBarModule { }
