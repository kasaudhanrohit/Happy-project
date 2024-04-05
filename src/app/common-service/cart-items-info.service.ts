import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartItemsInfoService {
  itemsinfoobj = [];
  customerfeedback = [{ "customer_name": "Suresh Sehrawat", "customer_msg":"Exceptional experience with Ayodhyawasi Apnaatta – seamless, user-friendly, and commendable customer service."},
    { "customer_name": "Abhishek varshney", "customer_msg": "Ayodhyawasi Apnaatta impresses with its excellent customer service, user-friendly platform, and reliable information, creating a positive and engaging experience for users" } ,
    { "customer_name": "Manish Yadav", "customer_msg": "Ayodhyawasi Apnaatta, with its natural products, stands out for its excellent customer service, user-friendly platform, and reliable information, offering a positive and holistic experience for users." } ,
    { "customer_name": "Anubhav Sharma", "customer_msg": "Ayodhyawasi Apnaatta shines with its eco-friendly and traditional approach, seamlessly combining excellent customer service" }, 
    { "customer_name": "Shivam Singh", "customer_msg": "Ayodhyawasi Apnaatta's eco-friendly and traditional approach amplifies its exceptional customer service, user-friendly platform, and reliable information, providing a harmonious and culturally rich experience for users." } 
  ];
  constructor() { 
    this.itemsinfoobj = [];
  }
}

// export interface CartItemsInfoInterface {
//   productname: string;
//   quantity: string;
//   producttype: string;
//   price: string;
//   productimgsrc :string;
// }
