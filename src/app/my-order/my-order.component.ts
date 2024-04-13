import { Component, OnInit } from '@angular/core';
import { HttprequestService } from '../common-service/httprequest.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {
  busy = true;
  myorderdata = [];
  constructor(private httpreq : HttprequestService) { }

  ngOnInit(): void {
    this.busy = false;
    let logedinuserinfo = JSON.parse(localStorage.getItem("userinfo"));
    this.httpreq.getuserorderinfo({"username":logedinuserinfo.username}).subscribe((data )=>
      { 
        console.log("getuserorderinfo response : " ,data)
        if(data && data[0] && data[0]['status'] == "success")
          {
            console.log("data[0][data] ",data[0]['data']);
            let dataarr = data[0]['data'];
            const groupedOrders = dataarr.reduce((acc, order) => {
              const orderId = order.orderid;
              const existingOrder = acc.find(item => item.orderid === orderId);
          
              if (existingOrder) {
                  existingOrder.data.push(order);
              } else {
                  acc.push({ orderid: orderId, data: [order] });
              }
              return acc;
          }, []);
          this.myorderdata =groupedOrders;
          console.log(" this.myorderdata ",this.myorderdata);
          }
      });
  }

}
