import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { HttprequestService } from '../common-service/httprequest.service';
import { Router } from '@angular/router';
import { PrimeIcons } from "primeng/api";
import { throwError } from 'rxjs';
@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyOrderComponent implements OnInit {
  busy = true;
  myorderdata = [];
  username ="Guest";
  events: any[];
  constructor(private httpreq : HttprequestService,private router:Router,) { }

  ngOnInit(): void {
    this.events = [
      {status: 'Ordered', field:'orderTime', data: '15/10/2020 10:30', icon: PrimeIcons.SLACK, color: '#9C27B0', image: 'game-controller.jpg'},
      {status: 'Shipped', field:'sellaprvl',data: '15/10/2020 14:00', icon: "pi pi-gift", color: '#673AB7'},
      {status: 'En Route', field:'outfdlvr',data: '15/10/2020 16:15', icon: "pi pi-truck", color: '#FF9800'},
      {status: 'Delivered',field:'delivered', data: '16/10/2020 10:00', icon: "pi pi-building-columns", color: '#607D8B'}
  ];

    this.busy = false;
    let logedinuserinfo = JSON.parse(localStorage.getItem("userinfo")) || {"username":"guest","mobileno":"","emailid":""};
    this.username = logedinuserinfo.username;
    this.httpreq.getuserorderinfo({"username":logedinuserinfo.username}).subscribe((data )=>
      { 
        console.log("getuserorderinfo response : " ,data)
        if(data && data[0] && data[0]['status'] == "success")
          {
            console.log("data[0][data] ",data[0]['data']);
            let dataarr = data[0]['data'];  
            const groupedOrdersMap = dataarr.reduce((map, order) => {
              const orderId = order.orderid;
              if (map.has(orderId)) {
                  map.get(orderId).data.push(order);
                  map.get(orderId).total += parseFloat(order.total);
              } else {
                const orderTime = order.ordertime;
                const orderstatus_status = order.orderstatus_status;
                const sellaprvl = order.sellaprvl == "approved"?"item shiped to the delivery partner" : "Waiting for seller approval";
               const onway1 = (order.onway1 || "Ayodhyahub 22 April 2024");
               const outfdlvr = " Delivery today by 5 pm";
                const delivered ="22 April 2024";
                this.events.forEach((val) => 
                  {
                    if(val.field == "sellaprvl")
                      val.data = sellaprvl;
                    else if(val.field == "orderTime")
                      val.data = orderTime;
                    else if(val.field == "outfdlvr")
                      val.data = onway1;
                    else if(val.field == "delivered")
                      val.data = delivered;
                  })
                  console.log("this.evc ",this.events);
                this.events = [...this.events];
                map.set(orderId, { orderid: orderId, ordertime: orderTime, data: [order] ,total: parseFloat(order.total),orderstatus_status:orderstatus_status});
              }
          
              return map;
          }, new Map());
          
          const groupedOrders = [...groupedOrdersMap.values()];
          this.myorderdata =groupedOrders;      
          console.log(" this.myorderdata ",this.myorderdata);
          }
      });
  }
 
  openproductdetail(productname)
  {
    this.router.navigate(['/product-detail'], { queryParams: { productitem_name: productname } });
  }

  
}
