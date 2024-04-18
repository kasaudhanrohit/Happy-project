import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
import { CartItemsInfoService } from '../common-service/cart-items-info.service';
import { SessionStateService } from '../common-service/session-state.service';
//import { FlourProductinfoService } from '../common-service/flour-productinfo.service';
import { AllproductProductinfoService } from '../common-service/allproduct-productinfo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit {
  cartitemsinfo = [];
  productiteminfo = [];
  relatedproductiteminfo = [];
  moreproductiteminfo = [];
  busy = true;
  currentproductindo :any;
  imageSrc = '';
  cartvalue = 0;
  constructor(private AllproductProductinfoService:AllproductProductinfoService,private route: ActivatedRoute, private router: Router, private SessionStateService: SessionStateService, private cartitemsinfoservice: CartItemsInfoService) {
    this.cartitemsinfo = [];
    this.productiteminfo = [];
    this.cartitemsinfo = this.cartitemsinfoservice?.itemsinfoobj;
    this.productiteminfo = this.AllproductProductinfoService?.allproductinfo;

   }
  ngAfterViewInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.cartitemsinfo = [];
    this.productiteminfo = [];
    this.cartitemsinfo = this.cartitemsinfoservice?.itemsinfoobj;
    if (this.route.snapshot.queryParams.productitem_name)
    {
      let productitem_name = this.route.snapshot.queryParams.productitem_name;
      this.moreinfo(productitem_name);  
    }
    else
    {
      let a = JSON.parse(JSON.stringify(this.AllproductProductinfoService.allproductinfo));//this.productiteminfo[0];
      this.currentproductindo = a[0]
      this.imageSrc = this.currentproductindo?.productimgscr;
      let producitem = JSON.parse(JSON.stringify(this.AllproductProductinfoService.allproductinfo));
      producitem.shift();
      this.productiteminfo = producitem;
      this.relatedproductiteminfo = producitem.slice(0,6);
      this.moreproductiteminfo = producitem.slice(6);
    }
    this.getcartcount();
    this.SessionStateService.on('updatedcartinfo').subscribe(() => {
      this.getcartcount();
    });
    this.SessionStateService.on('productdetailsearchsection').subscribe(() => {
      let productitem_name = this.SessionStateService.get("productdetailsearchsection");
      this.moreinfo(productitem_name);
    })
    this.busy = false;
  }
  getcartcount() {
    this.cartvalue = 0;
    console.log("getcartcount this.cartitemsinfo : ", this.cartitemsinfo);
    this.cartitemsinfo.forEach(element => {
      this.cartvalue += element.cartvalue;

    });
  }


  placeOrder() {
    this.router.navigate(['/product-cart']);
  }


  removeJSONObjectByKey(jsonArray, keyToRemove) {
    for (let i = 0; i < jsonArray.length; i++) {
      const jsonObject = jsonArray[i];

      if (jsonObject.productname.includes(keyToRemove) ) {
        jsonArray.splice(i, 1);
        i--; // Since we removed an element, we need to adjust the index
      }
    }

    return jsonArray;
  }
  moreinforelatedprod(productitem_name)
  {
    this.router.navigate(['/product-detail'], { queryParams: { productitem_name: productitem_name } });
    this.SessionStateService.set('productdetailsearchsection', productitem_name, true);
  }
  moreinfo(productitem_name)
  {

    try {
      let producitemm = JSON.parse(JSON.stringify(this.AllproductProductinfoService.allproductinfo));
      let items = producitemm.filter((val) => val.productname.includes(productitem_name));
      if (items.length) {
        this.currentproductindo = items[0];
        this.imageSrc = this.currentproductindo?.productimgscr;
        //this.productiteminfo = this.ProductItemsInfoService.productinfoobj;
        let producitem = JSON.parse(JSON.stringify(this.AllproductProductinfoService.allproductinfo));
        let aa = producitem.filter((val) => val.producttype == this.currentproductindo.producttype );
        this.moreproductiteminfo = producitem.filter((val) => val.producttype != this.currentproductindo.producttype).slice(0,10);
        this.relatedproductiteminfo = this.removeJSONObjectByKey(aa, productitem_name);
      }
    }
    catch (e) {
      
      let a = JSON.parse(JSON.stringify(this.AllproductProductinfoService.allproductinfo));
      this.currentproductindo = a[0]
      this.imageSrc = this.currentproductindo?.productimgscr;
      let producitem = JSON.parse(JSON.stringify(this.AllproductProductinfoService.allproductinfo));
      producitem.shift();
      this.productiteminfo = producitem;
      this.relatedproductiteminfo = producitem.slice(0, 6);
      this.moreproductiteminfo = producitem.slice(6);
    }
  }

  slideImage(imgsrc)
  {
    this.imageSrc = imgsrc;
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
    console.log("this.cartitemsinfoservice.itemsinfoobj ", this.cartitemsinfoservice.itemsinfoobj);
    this.SessionStateService.set('updatedcartinfo', null, true);
  }

  addtocartdetail(productitem)
  { 
    let proditem = this.AllproductProductinfoService.allproductinfo.filter((val) => val.productname.includes(productitem.productname));
    
    if(proditem.length > 0 )
    {
      this.currentproductindo = proditem[0];
      this.currentproductindo.cartvalue = this.currentproductindo.cartvalue+1;
    
    if (this.cartitemsinfo.length == 0)
      this.cartitemsinfo.push(this.currentproductindo);
    else if (!this.cartitemsinfo.some(item => item.productname === productitem.productname)) {
      this.cartitemsinfo.push(this.currentproductindo);
    }
      this.SessionStateService.set('updatedcartinfo', null, true);
   }

    console.log("productitem : ", productitem);
    console.log(" this.cartitemsinfoservice : ", this.cartitemsinfoservice);
    console.log("this.ProductItemsInfoService.productinfoobj : ", this.AllproductProductinfoService.allproductinfo);
  }
  removefromcartdtail(productitem)
  {
    let proditem = this.AllproductProductinfoService.allproductinfo.filter((val) => val.productname.includes(productitem.productname));
    
    if (proditem.length > 0)
    {
      this.currentproductindo = proditem[0];
      if (this.currentproductindo.cartvalue == 0)
        return;
      this.currentproductindo.cartvalue = this.currentproductindo.cartvalue - 1;
      this.SessionStateService.set('updatedcartinfo', null, true);
    }
  }

}
