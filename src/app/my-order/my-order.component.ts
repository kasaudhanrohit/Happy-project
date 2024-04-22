import { Component, OnInit } from '@angular/core';
import { HttprequestService } from '../common-service/httprequest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {
  busy = true;
  myorderdata = [];
  username ="Guest";
  constructor(private httpreq : HttprequestService,private router:Router,) { }

  ngOnInit(): void {
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
              const orderTime = order.ordertime;
              const orderstatus_status = order.orderstatus_status;
              const sellaprvl =order.sellaprvl;
              const onway1 = order.onway1;
              const onway2 = order.onway2;
              const onway3 = order.onway3;
              if (map.has(orderId)) {
                  map.get(orderId).data.push(order);
                  map.get(orderId).total += parseFloat(order.total);
              } else {
                  map.set(orderId, { orderid: orderId, ordertime: orderTime, data: [order] ,total: parseFloat(order.total),orderstatus_status:orderstatus_status,sellaprvl:sellaprvl,onway1:onway1,onway2:onway2,onway3:onway3});
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


 /* $("#next").on("click", function() {
    var $bar = $(".ProgressBar");
    if ($bar.children(".is-current").length > 0) {
      $bar.children(".is-current").removeClass("is-current").addClass("is-complete").next().addClass("is-current");
    } else {
      $bar.children().first().addClass("is-current");
    }
  });
  
  $("#previous").on("click", function() {
    var $bar = $(".ProgressBar");
    if ($bar.children(".is-current").length > 0) {
      $bar.children(".is-current").removeClass("is-current").prev().removeClass("is-complete").addClass("is-current");
    } else {
      $bar.children(".is-complete").last().removeClass("is-complete").addClass("is-current");
    }
  });
  */
}
