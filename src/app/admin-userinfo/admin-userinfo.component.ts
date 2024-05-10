import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';
import { HttprequestService } from '../common-service/httprequest.service';

@Component({
  selector: 'app-admin-userinfo',
  templateUrl: './admin-userinfo.component.html',
  styleUrls: ['./admin-userinfo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminUserinfoComponent implements OnInit {
  @Input() rowusername;
  // @Input() set rowusername(parsepagefilter: string) {
  //   if (parsepagefilter) {
  //     this.flagrestcall = true;
  //     this.pageperformancefilter(parsepagefilter);
  //   }
  // }
  cols: any[];
  detailuserorderinfo = [];
  userorderdata=[];
  constructor(private httpreq : HttprequestService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'username', header: 'User Name' },
      { field: 'orderid', header: 'OrderId' },
      { field: 'timestamp', header: 'Time Stamp' },
      { field: 'status', header: 'Status' },
      { field: 'action', header: 'Action' },
  ];
  console.log("rowusername =========== ",this.rowusername);
  this.httpreq.adminuserorderstatus({"username":this.rowusername,"orderid":''}).subscribe((data )=>
    { 
      console.log("getuserorderinfo response : " ,data)
      if(data && data[0] && data[0]['status'] == "success")
        {
          this.userorderdata = data[0]['data'];  
          
        }
    });
  }
  getUserOrderdetailindo(event)
  {
    console.log("hello hello event ",event);
    this.detailuserorderinfo = [];
    this.httpreq.admindetailuserorderstatus({"username":event?.data?.username,"orderid":event?.data?.orderid}).subscribe((data )=>
      { 
        console.log("getuserorderinfo response : " ,data)
        if(data && data[0] && data[0]['status'] == "success")
          {
            let dataarr = data[0]['data'];  
            const groupedOrdersMap = dataarr.reduce((map, order) => {
            const orderId = order.orderid;
            const username = order.username;
              if (map.has(orderId)) {
                  map.get(orderId).data.push(order);
                  map.get(orderId).total += parseFloat(order.total);
              } else {
                const orderTime = order.ordertime;
                map.set(orderId, { orderid: orderId, ordertime: orderTime, data: [order] ,total: parseFloat(order.total),username:username});
              }   
              return map;
          }, new Map());
          
          const groupedOrders = [...groupedOrdersMap.values()];
          this.detailuserorderinfo =groupedOrders; 
          console.log("detailuserorderinfo ",this.detailuserorderinfo);
          }
      });
  }


}
