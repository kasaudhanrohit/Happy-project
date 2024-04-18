import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
declare var gsap :any;
import { CartItemsInfoService } from '../common-service/cart-items-info.service';
import { FlourProductinfoService } from '../common-service/flour-productinfo.service';
import { SessionStateService } from '../common-service/session-state.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductCartComponent implements OnInit {
  cartitemsinfo:any=[];
  productiteminfo:any =[];
  subtotal = 0;
  busy = true;
  shipping = 0;
  constructor(private router: Router, private SessionStateService: SessionStateService, private cartitemsinfoservice: CartItemsInfoService, private FlourProductinfoService: FlourProductinfoService) { 
    this.cartitemsinfo = this.cartitemsinfoservice?.itemsinfoobj;
    this.productiteminfo = this.FlourProductinfoService.productinfoobj;
  }
  ngAfterViewInit() {
    
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngOnInit(): void {
    this.cartitemsinfo = this.cartitemsinfoservice?.itemsinfoobj;
    this.productiteminfo = this.FlourProductinfoService.productinfoobj;
    console.log("this.cartitemsinfo : ", this.cartitemsinfo);
    
    this.cartitemsinfo.forEach(element => {
      this.subtotal += element.cartvalue * element.discountprice
    });
    this.busy = false;
  }
  
  removeItem(item)
  {

  }
  opencheckout()
  {

    const checkoutBtns = document.querySelectorAll(".checkout-btn");

    checkoutBtns.forEach((btn, index) => {
      const checkoutTL = new gsap.timeline({
        paused: true
      });

      const btnText = btn.querySelector(".checkout-btn__text");
      const btnIcon = btn.querySelector(".checkout-btn__icon");
      const btnSuccess = btn.querySelector(".checkout-btn__success");
      checkoutTL
        .to(btnText, {
          opacity: 0,
          duration: 0.75,
          ease: "power4.in"
        })
        .to(
          btnIcon,
          {
            x: 150,
            delay: 0.25,
            duration: 0.75,
            opacity: 0,
            ease: "back.in(1.7)"
          },
          "<"
        );
      if (index === 0) {
        checkoutTL
          .to(btn, {
            background: "#27ae60",
            ease: "power4.out",
            width: 200
          })
          .to(
            btnSuccess,
            {
              opacity: 1,
              ease: "power4.out",
              delay: 0.25
            },
            "<"
          );
      } 

      checkoutTL.play();

      setTimeout(() => {
        checkoutTL.restart();
        checkoutTL.pause();
        this.router.navigate(['/product-checkout'])
      }, 2000);
    });
    //this.router.navigate(['/product-checkout'], { replaceUrl: true });
  }
}
