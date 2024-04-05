import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartItemsInfoService } from '../common-service/cart-items-info.service';
import { SessionStateService } from '../common-service/session-state.service';
import { FlourProductinfoService } from '../common-service/flour-productinfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  cartitemsinfo:any = [];
  productiteminfo:any = [];
  cartvalue = 0;
  customerfeedback:any = [];
  constructor(private router: Router, private SessionStateService: SessionStateService, private cartitemsinfoservice: CartItemsInfoService, private flourProductInfoService: FlourProductinfoService) {
    this.cartitemsinfo = [];
    this.productiteminfo = [];
    this.cartitemsinfo = this.cartitemsinfoservice?.itemsinfoobj;
    this.productiteminfo = this.flourProductInfoService.productinfoobj;
    this.customerfeedback = this.cartitemsinfoservice?.customerfeedback;
   }
  

  ngOnInit(): void {
    this.cartitemsinfo =[];
    this.productiteminfo = [];
    this.cartitemsinfo = this.cartitemsinfoservice?.itemsinfoobj;
    this.productiteminfo = this.flourProductInfoService.productinfoobj;
    this.customerfeedback = this.cartitemsinfoservice?.customerfeedback;
      
    this.getcartcount();
    this.SessionStateService.on('updatedcartinfo').subscribe(() => {
      this.getcartcount();
    })

    //setTimeout(()=>{this.speak()},5000);
  }
  ngAfterViewInit()
  {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  getcartcount() {
    this.cartvalue = 0;
    //console.log("getcartcount this.cartitemsinfo : ", this.cartitemsinfo);
    this.cartitemsinfo.forEach(element => {
      this.cartvalue += element.cartvalue;

    });
  }

  removefromcart(productitem)
  {
    if (productitem.cartvalue == 0)
    return ;
    productitem.cartvalue = productitem.cartvalue - 1;
    this.SessionStateService.set('updatedcartinfo', null, true);
  }
  addtocart(productitem)
  {
    productitem.cartvalue = productitem.cartvalue+1;
    if (this.cartitemsinfo.length ==0)
    this.cartitemsinfo.push(productitem);
    else if (!this.cartitemsinfo.some(item => item.productname === productitem.productname))
    {
      this.cartitemsinfo.push(productitem);
    }
    //console.log("this.cartitemsinfoservice.itemsinfoobj ", this.cartitemsinfoservice.itemsinfoobj);
    this.SessionStateService.set('updatedcartinfo', null, true);
  }
  
  placeOrder()
  {
    this.router.navigate(['/product-cart'], { replaceUrl: true });
  }

  moreinfo(productitem_name)
  {
    this.router.navigate(['/product-detail'], { queryParams: { productitem_name: productitem_name },replaceUrl: true });
  }
  // Listen for the 'window:scroll' event
  // @HostListener('window:scroll', [])
  // onScroll() {
  //   // Call the handleScroll method when the page is scrolled
  //   this.handleScroll();
  // }
  
  // handleScroll()
  // {
  //   console.log("++++++++++++++++++++++++++");
  // }
}
