import { Component, OnInit } from '@angular/core';
import { HttprequestService } from '../common-service/httprequest.service';
import { Router } from '@angular/router';
import { MessageService,ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-admin-orderstatus',
  templateUrl: './admin-orderstatus.component.html',
  styleUrls: ['./admin-orderstatus.component.scss']
})
export class AdminOrderstatusComponent implements OnInit {
  calvalue = new Date();
  maxDate = new Date();
  cols: any[];
  customers=[];
  displayModal = false;
  value1 = "";
  statusval = "";
  onwayval1="";
  onwayval2="";
  onwayval3="";
  selleraprval="";
  detailuserorderinfo = [];
  detailcols = [];
  constructor(private confirmationService:ConfirmationService,private router:Router,private httpreq : HttprequestService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'username', header: 'User Name' },
      { field: 'orderid', header: 'OrderId' },
      { field: 'timestamp', header: 'Time Stamp' },
      { field: 'status', header: 'Status' },
      { field: 'action', header: 'Action' },
  ];


  // this.httpreq.adminorderstatus().subscribe((data )=>
  //   { 
  //     console.log("getuserorderinfo response : " ,data)
  //     if(data && data[0] && data[0]['status'] == "success")
  //       {
  //         console.log("data[0][data] ",data[0]['data']);
  //         this.customers = data[0]['data']
  //       }
  //   });
  }

  getRecord()
  {
    console.log("getrecord",this.calvalue);
    let starttime = new Date(new Date(this.calvalue).toLocaleDateString()).getTime();
    let endtime = new Date().getTime();
    console.log("starttime",starttime," endtime ",endtime);
    this.httpreq.adminorderstatus({"starttime":starttime,"endtime":endtime}).subscribe((data )=>
      { 
        console.log("getuserorderinfo response : " ,data)
        if(data && data[0] && data[0]['status'] == "success")
          {
            console.log("data[0][data] ",data[0]['data']);
            this.customers = data[0]['data']
          }
      });
  }
  editProduct(rowData)
  {
    console.log("edit rowData",rowData);
    this.displayModal = true;
  }
  submitRecord()
  {
    console.log("submitrecord item ");
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
            const username = event?.data?.username;
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
  deleteProduct(product) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + product.name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
        console.log("Need to add rest call for delete records");
        }
    });
}
} 
