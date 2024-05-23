import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
//import { HighchartsChartModule } from 'highcharts-angular';
const imports = [
  CommonModule,
 // HighchartsChartModule
];

const components = [ChartComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports
  ],
  exports: [components],
})


export class ChartModule { }
