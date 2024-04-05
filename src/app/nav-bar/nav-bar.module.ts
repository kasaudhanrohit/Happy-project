import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router'; 
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
const imports = [
  CommonModule,
  BadgeModule,
  RouterModule,
  OverlayPanelModule,
  ListboxModule,
  AutoCompleteModule
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
