import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { HttprequestService } from '../common-service/httprequest.service';
import { Router } from '@angular/router';
import { MessageService,ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-admin-orderstatus',
  templateUrl: './admin-orderstatus.component.html',
  styleUrls: ['./admin-orderstatus.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminOrderstatusComponent implements OnInit {
  calvalue = new Date();
  maxDate = new Date();
  cols: any[];
  customers=[];
  displayModal = false;
  displayuserinfodata = false;
  value1 = "";
  statusval = "";
  onwayval1="";
  onwayval2="";
  onwayval3="";
  selleraprval="";
  orderid = "";
  username="";
  detailuserorderinfo = [];
  detailcols = [];
  rowusername = "guest";
  activeItem = 2;
  basicData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
basicOptions = {
  plugins: {
      legend: {
          labels: {
             // color: '#ebedef'
          }
      }
  },
  scales: {
      x: {
          
          grid: {
              color: 'rgba(255,255,255,0.2)'
          }
      },
      y: {
          
          grid: {
              color: 'rgba(255,255,255,0.2)'
          }
      }
  }
};
  constructor(private confirmationService:ConfirmationService,private router:Router,private httpreq : HttprequestService) { }

  ngOnInit(): void {
    this.activeItem = 2;
    this.cols = [
      { field: 'username', header: 'User Name' },
      { field: 'orderid', header: 'OrderId' },
      { field: 'timestamp', header: 'Time Stamp' ,pipe: 'date' },
      { field: 'status', header: 'Status' },
      { field: 'action', header: 'Action' },
  ];
  }

  getRecord()
  {
    let starttime = new Date(new Date(this.calvalue).toLocaleDateString()).getTime();
    let endtime = new Date().getTime();
    this.httpreq.adminorderstatus({"starttime":starttime,"endtime":endtime}).subscribe((data )=>
      { 
        if(data && data[0] && data[0]['status'] == "success")
          {
            this.customers = data[0]['data']
          }
      });
  }
  editProduct(rowData)
  {
    console.log("edit rowData",rowData);
    this.displayModal = true;
    this.httpreq.adminuserorderstatus({"username":rowData.username,"orderid":rowData.orderid}).subscribe((data )=>
      { 
        if(data && data[0] && data[0]['status'] == "success")
          {
            let dataobj = data[0]['data'][0];
            this.selleraprval= dataobj.sellaprvl;
            this.statusval = dataobj.status;
            this.onwayval1= dataobj.onway1;
            this.onwayval2= dataobj.onway2;
            this.onwayval3= dataobj.onway3;
            this.orderid = dataobj.orderid;
            this.username=dataobj.username;
          }
      });
  }
  submitRecord()
  {
    console.log("submitrecord item ",this.statusval,this.selleraprval,this.onwayval1,this.onwayval2, this.onwayval3,  this.orderid,this.username);
    this.httpreq.adminupdateorderstatus({"status":this.statusval,"sellaprvl":this.selleraprval,"onway1":this.onwayval1,"onway2":this.onwayval2,"onway3":this.onwayval3,"orderid":this.orderid,"username":this.username}).subscribe((data )=>
      {
        console.log("adminupdateorderstatus data : ",data);
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

 userinfodata(rowdata)
  {
    console.log("userinfo rowdata : ",rowdata);
    
    this.rowusername = rowdata.username;
    this.displayuserinfodata = true;
    console.log("userinfodata rowusername : ",this.rowusername);
  }

  totaluser()
  {
    this.activeItem = 0;
    console.log("total user");
  }
  totalorder()
  {
    this.activeItem = 1;
    console.log("total order");
  }
  resentorder()
  {
    this.activeItem = 2;
    console.log("recent order");
  }
  totalrevenue()
  {
    this.activeItem = 3;
    console.log("total revenue");
  }
} 
