import { Component, OnInit } from '@angular/core';
import { HttprequestService } from '../common-service/httprequest.service';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  busy = true;
  constructor(private httpreq : HttprequestService) { }

  ngOnInit(): void {
    this.busy = false;
    let logedinuserinfo = JSON.parse(localStorage.getItem("userinfo"));
    this.httpreq.getusercartinfo({"username":logedinuserinfo.username}).subscribe((data )=>
      { 
        console.log("getuserorderinfo response : " ,data)
        if(data && data[0] && data[0]['status'] == "success")
          {
            console.log("data[0][data] ",data[0]['data']);
          }
      });
  }

}
