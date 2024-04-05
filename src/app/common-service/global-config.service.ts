import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  company_name: any;
  company_owner: any;
  constructor() {
    this.company_name = "hello";
    this.company_owner = "ss";

  }
}
