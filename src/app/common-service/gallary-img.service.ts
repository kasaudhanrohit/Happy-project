import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GallaryImgService {
  gallaryimginfo = [{
    imgsrc: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/assets/carousel-img/img-01.webp"
    },
    {
      imgsrc: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/assets/carousel-img/img-01.webp"
    },
    {
      imgsrc: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/assets/carousel-img/img-01.webp"
    },
    {
      imgsrc: "assets/images/AttaPacket.jpg"
    },
    {
      imgsrc: "assets/images/AttaPacket.jpg"
    }
  ]
  constructor() { }
}
