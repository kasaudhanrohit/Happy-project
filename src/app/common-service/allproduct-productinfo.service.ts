import { Injectable } from '@angular/core';
import { BesanProductinfoService } from './besan-productinfo.service';
import { FlourProductinfoService } from './flour-productinfo.service';
import { RiceProductinfoService } from './rice-productinfo.service';
import { OilProductinfoService } from './oil-productinfo.service';
import { RiceflourProductinfoService } from './riceflour-productinfo.service';
import { NewarrivalsProductinfoService } from './newarrivals-productinfo.service';
@Injectable({
  providedIn: 'root'
})
export class AllproductProductinfoService {
  allproductinfo = [];
  constructor(private NewarrivalsProductinfoService:NewarrivalsProductinfoService,private OilProductinfoService: OilProductinfoService, private RiceflourProductinfoService: RiceflourProductinfoService, private RiceProductinfoService: RiceProductinfoService, private FlourProductinfoService: FlourProductinfoService, private BesanProductinfoService: BesanProductinfoService,) {
    this.allproductinfo = [...this.NewarrivalsProductinfoService.productinfoobj,...this.OilProductinfoService.productinfoobj, ...this.BesanProductinfoService.productinfoobj, ...this.RiceflourProductinfoService.productinfoobj, ...this.RiceProductinfoService.productinfoobj, ...this.FlourProductinfoService.productinfoobj];
   }
}
