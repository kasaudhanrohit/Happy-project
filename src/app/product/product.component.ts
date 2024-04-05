import { Component, OnInit } from '@angular/core';
// import { BesanProductinfoService } from '../common-service/besan-productinfo.service';
// import { FlourProductinfoService } from '../common-service/flour-productinfo.service';
// import { RiceProductinfoService } from '../common-service/rice-productinfo.service';
// import { OilProductinfoService } from '../common-service/oil-productinfo.service';
// import { RiceflourProductinfoService } from '../common-service/riceflour-productinfo.service';
// import { NewarrivalsProductinfoService } from '../common-service/newarrivals-productinfo.service';
import { AllproductProductinfoService } from '../common-service/allproduct-productinfo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SessionStateService } from '../common-service/session-state.service';
import { CartItemsInfoService } from '../common-service/cart-items-info.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  busy = true;
  cartvalue = 0;
  allproductinfo = [];
  finalproductinfo = [];
  cartitemsinfo: any = [];
  constructor(private cartitemsinfoservice: CartItemsInfoService, private SessionStateService: SessionStateService,private route: ActivatedRoute, private router:Router,private AllproductProductinfoService: AllproductProductinfoService) {
    this.allproductinfo = this.AllproductProductinfoService.allproductinfo;
   }

  ngOnInit(): void {
    this.busy = false;
    this.cartitemsinfo = this.cartitemsinfoservice?.itemsinfoobj;
    this.getProtuctTypeinfo(this.route.snapshot.queryParams.producttype_name);
    this.SessionStateService.on('productinfotypesection').subscribe(() => {
      let routeinfo_name = this.SessionStateService.get("productinfotypesection");
      this.getProtuctTypeinfo(routeinfo_name);
    })
    this.getcartcount();
    this.SessionStateService.on('updatedcartinfo').subscribe(() => {
      this.getcartcount();
    })

    
  }
  getProtuctTypeinfo(routeinfo_name)
  {
    if (routeinfo_name) {
      this.finalproductinfo = this.allproductinfo.filter((val) => val.producttype.toLowerCase() == routeinfo_name.toLowerCase());
      if (!this.finalproductinfo.length)
        this.finalproductinfo = this.allproductinfo;
    }
    else {
      this.finalproductinfo = this.allproductinfo;
    }
  }
  moreinfo(productitem_name) {
    this.router.navigate(['/product-detail'], { queryParams: { productitem_name: productitem_name }, replaceUrl: true });
  }
  placeOrder() {
    this.router.navigate(['/product-cart'], { replaceUrl: true });
  }

  ngAfterViewInit() {
    this.scrollToTop();
  }
  
  removefromcart(productitem) {
    if (productitem.cartvalue == 0)
      return;
    productitem.cartvalue = productitem.cartvalue - 1;
    this.SessionStateService.set('updatedcartinfo', null, true);
  }
  addtocart(productitem) {
    productitem.cartvalue = productitem.cartvalue + 1;
    if (this.cartitemsinfo.length == 0)
      this.cartitemsinfo.push(productitem);
    else if (!this.cartitemsinfo.some(item => item.productname === productitem.productname)) {
      this.cartitemsinfo.push(productitem);
    }
    //console.log("this.cartitemsinfoservice.itemsinfoobj ", this.cartitemsinfoservice.itemsinfoobj);
    this.SessionStateService.set('updatedcartinfo', null, true);
  }
  getcartcount() {
    this.cartvalue = 0;
    //console.log("getcartcount this.cartitemsinfo : ", this.cartitemsinfo);
    this.cartitemsinfo.forEach(element => {
      this.cartvalue += element.cartvalue;

    });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
