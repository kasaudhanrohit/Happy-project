import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
import { CartItemsInfoService } from '../common-service/cart-items-info.service';
import { FlourProductinfoService } from '../common-service/flour-productinfo.service';
import { SessionStateService } from '../common-service/session-state.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { HttprequestService } from '../common-service/httprequest.service';
//declare var particlesJS: any;
@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductCheckoutComponent implements OnInit {
  cartitemsinfo: any = [];
  productiteminfo: any = [];
  subtotal = 0;
  busy=true;
  shipping = 0;
  isAccordionOpen = false;
  checked : any;
  billingform: FormGroup;
  shippingform: FormGroup;
  constructor(private httpreqService: HttprequestService, private messageService: MessageService, private router: Router, private SessionStateService: SessionStateService, private cartitemsinfoservice: CartItemsInfoService, private FlourProductinfoService: FlourProductinfoService) {
    this.cartitemsinfo = this.cartitemsinfoservice?.itemsinfoobj;
    this.productiteminfo = this.FlourProductinfoService.productinfoobj;
    this.setForm();
   }

  ngOnInit(): void {
    this.setForm();
    // particlesJS.load('particles-js', '/assets/partical/partical.json', function () {
    //   console.log('particles.json loaded...');
    // });
    this.cartitemsinfo = this.cartitemsinfoservice?.itemsinfoobj;
    this.productiteminfo = this.FlourProductinfoService.productinfoobj;
    console.log("this.cartitemsinfo : ", this.cartitemsinfo);

    this.cartitemsinfo.forEach(element => {
      this.subtotal += element.cartvalue * element.discountprice
    });
    this.busy = false;
  }
  ngAfterViewInit() {
    
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  hello()
  {
    console.log("this.billingform", this.billingform.get("username").value);
    this.isAccordionOpen = false;
    if (this.checked)
    {
      this.isAccordionOpen = true;
      this.shippingform.get('username').patchValue(this.billingform.get("username").value);
      this.shippingform.get('email').patchValue(this.billingform.get("email").value);
      this.shippingform.get('address').patchValue(this.billingform.get("address").value);
      this.shippingform.get('mobile').patchValue(this.billingform.get("mobile").value);
      this.shippingform.get('comment').patchValue(this.billingform.get("comment").value);
      
    }
    else
    {
      this.shippingform.get('username').patchValue("");
      this.shippingform.get('email').patchValue("");
      this.shippingform.get('address').patchValue("");
      this.shippingform.get('mobile').patchValue("");
      this.shippingform.get('comment').patchValue("");
    }
    console.log("ssssssssssss ",this.checked);
  }
  setForm()
  {
    this.billingform = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'address': new FormControl('', Validators.required),
      'mobile': new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      'comment':new FormControl('')

    });
    this.shippingform = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'address': new FormControl('', Validators.required),
      'mobile': new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      'comment': new FormControl('')
    });
  }
  placesorder()
  {
    if (this.billingform.valid) {
      // Perform any actions needed with the form data
      console.log('Form submitted:', this.billingform.value);
    } else {
      // Display error messages or take appropriate action
      this.messageService.add({ key: 'my_key', severity: 'warn', summary: 'Warning', detail: "Please Enter the detail" });
      console.log('Form is invalid. Please check the fields.');
      return;
    }

    let orderinfo ={};
    orderinfo["billingform"] = this.billingform.value;
    orderinfo["shippingform"] = this.shippingform.value;
    let cartitem = JSON.parse(JSON.stringify(this.cartitemsinfo));
    let logedinuserinfo = JSON.parse(localStorage.getItem("userinfo")) || {"username":"guest","mobileno":"","emailid":""};
    let date = new Date();
    let orderid = logedinuserinfo.username+"_"+ date.getTime();
    let obj = cartitem.map((val) => { return{ 'orderid':orderid,'quantity': val.cartvalue, 'productname': val.productname, 'producttype': val.producttype,'productimgsrc':val.productimgscr, 'price': val.price, 'discountprice': val.discountprice,'total': (val.cartvalue * val.discountprice),'status':'in progress' ,'ordertime':date.toDateString()} })
    
    orderinfo["cartitemsinfo"] = obj;
    console.log("Placed Ordered orderinfo : ", orderinfo);
    //need to send orderinfo to backend
    const btn = document.querySelector(".place-order");
    btn.classList.remove("place-order--done");
    btn.classList.remove("place-order--default");
    btn.classList.add("place-order--placing");


    
    let userorderinfo = {'username':logedinuserinfo.username,"cartitemsinfo":obj};
    this.httpreqService.adduserorderinfo(userorderinfo).subscribe(
      (data: any) => {
        console.log(" userorderinforeq data ",data);

      });


    this.httpreqService.placedordermail(orderinfo).subscribe(
      (data: any) => {

        console.log("placedordermail data : ", data);
        //redirect into login page after successfully signup
        // this.router.navigate(['/login'], { replaceUrl: true });
      },
      (error) => {
        console.error('Error fetching items:', error);
      });

    setTimeout(() => {
      btn.classList.remove("place-order--placing");
      btn.classList.add("place-order--done");
      this.resetProductservice();  
    }, 7000);

    setTimeout(() =>{
      this.router.navigate(['/home']);
    },10000);
    
    
  }

  resetProductservice()
  {
    this.cartitemsinfoservice.itemsinfoobj = [];
    this.productiteminfo.forEach((val)=> val.cartvalue = 0);
    this.SessionStateService.set('updatedcartinfo', null, true);
  }
}
