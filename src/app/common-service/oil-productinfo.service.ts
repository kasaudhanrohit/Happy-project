import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OilProductinfoService {
  productinfoobj = [{
    productname: "Organic Mustard Oil–500 ML",
    description: `Ayodhyawasi Mustard Oil is a cherished culinary treasure from Ayodhya, India,
    known for its robust flavor and health benefits. With its pungent aroma and rich taste,
    it enhances dishes with a distinctive earthy profile.Renowned for its heart-friendly properties and versatility,
    it's a favorite among chefs and home cooks worldwide, embodying tradition and culinary excellence in every drop`,
     price: "₹40",
    pricekg: "₹40",
    discountprice: "35",
    weight: "1kg",
    productimgscr: "assets/images/oilbottlesmall.png",
    instock: "true",
    discount: "5%",
    cartvalue: 0,
    producttype: "oil",
    productimgscrdetail: ["assets/images/oilbackimg.jpg", "assets/images/oilingredient.jpg", "assets/images/fssai.jpg", "assets/images/oilmarketing.jpg"]
  },
  {
    productname: "Organic Mustard Oil–1 L",
    description: `Ayodhyawasi Mustard Oil is a cherished culinary treasure from Ayodhya, India,
    known for its robust flavor and health benefits. With its pungent aroma and rich taste,
    it enhances dishes with a distinctive earthy profile.Renowned for its heart-friendly properties and versatility,
    it's a favorite among chefs and home cooks worldwide, embodying tradition and culinary excellence in every drop`, 
    price: "₹80",
    pricekg: "₹40",
    discountprice: "70",
    weight: "1kg",
    productimgscr: "assets/images/oilbottlesmall.png",
    instock: "true",
    discount: "5%",
    cartvalue: 0,
    producttype: "oil",
    productimgscrdetail: ["assets/images/oilbackimg.jpg", "assets/images/oilingredient.jpg", "assets/images/fssai.jpg", "assets/images/oilmarketing.jpg"]
  }, {
    productname: "Organic Mustard Oil–2 L",
    description: `Ayodhyawasi Mustard Oil is a cherished culinary treasure from Ayodhya, India,
    known for its robust flavor and health benefits. With its pungent aroma and rich taste,
    it enhances dishes with a distinctive earthy profile.Renowned for its heart-friendly properties and versatility,
    it's a favorite among chefs and home cooks worldwide, embodying tradition and culinary excellence in every drop`,
     price: "₹200",
    pricekg: "₹40",
    discountprice: "175",
    weight: "5kg",
    productimgscr: "assets/images/oilbottlesmall.png",
    instock: "true",
    discount: "5%",
    cartvalue: 0,
    producttype: "oil",
    productimgscrdetail: ["assets/images/oilbackimg.jpg", "assets/images/oilingredient.jpg", "assets/images/fssai.jpg", "assets/images/oilmarketing.jpg"]
  },
  {
    productname: "Organic Mustard Oil–5 L",
    description: `Ayodhyawasi Mustard Oil is a cherished culinary treasure from Ayodhya, India,
    known for its robust flavor and health benefits. With its pungent aroma and rich taste,
    it enhances dishes with a distinctive earthy profile.Renowned for its heart-friendly properties and versatility,
    it's a favorite among chefs and home cooks worldwide, embodying tradition and culinary excellence in every drop`,
    price: "₹400",
    pricekg: "₹40",
    discountprice: "350",
    weight: "10kg",
    productimgscr: "assets/images/oilbottlesmall.png",
    instock: "true",
    discount: "5%",
    cartvalue: 0,
    producttype: "oil",
    productimgscrdetail: ["assets/images/oilbackimg.jpg", "assets/images/oilingredient.jpg", "assets/images/fssai.jpg", "assets/images/oilmarketing.jpg"]
  }];
  constructor() { }
}
