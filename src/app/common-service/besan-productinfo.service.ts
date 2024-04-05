import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BesanProductinfoService {
  productinfoobj = [{
    productname: "Organic ChanaDal Besan–1Kg",
    description: `Wheat flour that has been certified as organic. It has been carefully sourced and packaged to ensure that you receive both flavor and nutrition.
                  Rich in bran, which has a considerable amount of gut- healthy dietary fiber.
                  Dietary fibers and minerals in organic atta enhance immunity and facilitate simple digestion.
                  High - quality, maida - free organic wheat is locally sourced from India’s best wheat farms.
                  Rotis are soft and fluffy thanks to the traditional Chakki process, which is made with a superior wheat blend and absorbs water more effectively.
                  Organic whole wheat flour is used to make Indian specialties like Puri, Roti, and Naan that taste delicious.
                  Additionally, it is also used to make bread, pastries, cakes, and biscuits.Organic wheat is grown without synthetic GMOs and pesticides.`,
    price: "₹40",
    pricekg: "₹40",
    discountprice: "35",
    weight: "1kg",
    productimgscr: "assets/images/AttaPacket.jpg",
    instock: "true",
    discount: "5%",
    cartvalue: 0,
    producttype: "besan",
    productimgscrdetail: ["assets/images/backimg.jpg", "assets/images/ingredient.jpg", "assets/images/fssai.jpg", "assets/images/chakkiroti.jpg"]
  },
  {
    productname: "Organic ChanaDal Besan–2Kg",
    description: `Wheat flour that has been certified as organic. It has been carefully sourced and packaged to ensure that you receive both flavor and nutrition.
                  Rich in bran, which has a considerable amount of gut- healthy dietary fiber.
                  Dietary fibers and minerals in organic atta enhance immunity and facilitate simple digestion.
                  High - quality, maida - free organic wheat is locally sourced from India’s best wheat farms.
                  Rotis are soft and fluffy thanks to the traditional Chakki process, which is made with a superior wheat blend and absorbs water more effectively.
                  Organic whole wheat flour is used to make Indian specialties like Puri, Roti, and Naan that taste delicious.
                  Additionally, it is also used to make bread, pastries, cakes, and biscuits.Organic wheat is grown without synthetic GMOs and pesticides.`,
    price: "₹80",
    pricekg: "₹40",
    discountprice: "70",
    weight: "1kg",
    productimgscr: "assets/images/AttaPacket.jpg",
    instock: "true",
    discount: "5%",
    cartvalue: 0,
    producttype: "besan",
    productimgscrdetail: ["assets/images/backimg.jpg", "assets/images/ingredient.jpg", "assets/images/fssai.jpg", "assets/images/chakkiroti.jpg"]
  }, {
    productname: "Organic ChanaDal Besan–5Kg",
    description: `Wheat flour that has been certified as organic. It has been carefully sourced and packaged to ensure that you receive both flavor and nutrition.
                  Rich in bran, which has a considerable amount of gut- healthy dietary fiber.
                  Dietary fibers and minerals in organic atta enhance immunity and facilitate simple digestion.
                  High - quality, maida - free organic wheat is locally sourced from India’s best wheat farms.
                  Rotis are soft and fluffy thanks to the traditional Chakki process, which is made with a superior wheat blend and absorbs water more effectively.
                  Organic whole wheat flour is used to make Indian specialties like Puri, Roti, and Naan that taste delicious.
                  Additionally, it is also used to make bread, pastries, cakes, and biscuits.Organic wheat is grown without synthetic GMOs and pesticides.`,
    price: "₹200",
    pricekg: "₹40",
    discountprice: "175",
    weight: "5kg",
    productimgscr: "assets/images/AttaPacket.jpg",
    instock: "true",
    discount: "5%",
    cartvalue: 0,
    producttype: "besan",
    productimgscrdetail: ["assets/images/backimg.jpg", "assets/images/ingredient.jpg", "assets/images/fssai.jpg", "assets/images/chakkiroti.jpg"]
  },
  {
    productname: "Organic ChanaDal Besan–10Kg",
    description: `Wheat flour that has been certified as organic. It has been carefully sourced and packaged to ensure that you receive both flavor and nutrition.
                  Rich in bran, which has a considerable amount of gut- healthy dietary fiber.
                  Dietary fibers and minerals in organic atta enhance immunity and facilitate simple digestion.
                  High - quality, maida - free organic wheat is locally sourced from India’s best wheat farms.
                  Rotis are soft and fluffy thanks to the traditional Chakki process, which is made with a superior wheat blend and absorbs water more effectively.
                  Organic whole wheat flour is used to make Indian specialties like Puri, Roti, and Naan that taste delicious.
                  Additionally, it is also used to make bread, pastries, cakes, and biscuits.Organic wheat is grown without synthetic GMOs and pesticides.`,
    price: "₹400",
    pricekg: "₹40",
    discountprice: "350",
    weight: "10kg",
    productimgscr: "assets/images/AttaPacket.jpg",
    instock: "true",
    discount: "5%",
    cartvalue: 0,
    producttype: "besan",
    productimgscrdetail: ["assets/images/backimg.jpg", "assets/images/ingredient.jpg", "assets/images/fssai.jpg", "assets/images/chakkiroti.jpg"]
  },
  {
    productname: "Organic ChanaDal Besan–25Kg",
    description: `Wheat flour that has been certified as organic. It has been carefully sourced and packaged to ensure that you receive both flavor and nutrition.
                  Rich in bran, which has a considerable amount of gut- healthy dietary fiber.
                  Dietary fibers and minerals in organic atta enhance immunity and facilitate simple digestion.
                  High - quality, maida - free organic wheat is locally sourced from India’s best wheat farms.
                  Rotis are soft and fluffy thanks to the traditional Chakki process, which is made with a superior wheat blend and absorbs water more effectively.
                  Organic whole wheat flour is used to make Indian specialties like Puri, Roti, and Naan that taste delicious.
                  Additionally, it is also used to make bread, pastries, cakes, and biscuits.Organic wheat is grown without synthetic GMOs and pesticides.`,
    price: "₹1000",
    pricekg: "₹40",
    discountprice: "875",
    weight: "25kg",
    productimgscr: "assets/images/AttaPacket.jpg",
    instock: "true",
    discount: "5%",
    cartvalue: 0,
    producttype: "besan",
    productimgscrdetail: ["assets/images/backimg.jpg", "assets/images/ingredient.jpg", "assets/images/fssai.jpg", "assets/images/chakkiroti.jpg"]

  }];
  constructor() { }
}
