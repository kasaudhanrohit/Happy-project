import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-userinfo',
  templateUrl: './admin-userinfo.component.html',
  styleUrls: ['./admin-userinfo.component.scss']
})
export class AdminUserinfoComponent implements OnInit {
  calvalue = new Date();
  maxDate = new Date();
  cols: any[];
  customers=[{'username':'rohit7','mobile':'9651920286','emailid':'ka@gmail.com','totalordr':'222 INR','action':''}];
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'username', header: 'User Name' },
      { field: 'mobile', header: 'Mobile' },
      { field: 'emailid', header: 'Email Id' },
      { field: 'totalordr', header: 'Order Total' },
      { field: 'action', header: 'Action' },
  ];
  }
  
  getRecord()
  {
    console.log("getrecord",this.calvalue);
  }

}
