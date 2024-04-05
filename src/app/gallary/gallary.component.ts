import { Component, OnInit } from '@angular/core';
declare var $: any;
import { GallaryImgService } from '../common-service/gallary-img.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  busy = true;
  imageSrc = '';
  imgserviceinfo: any = [];
  constructor(private gallaryimg: GallaryImgService) {
    this.imgserviceinfo = this.gallaryimg.gallaryimginfo;
  }

  ngOnInit(): void {
    this.busy = false;
    this.imgserviceinfo = this.gallaryimg.gallaryimginfo;
    console.log("this.imgserviceinfo ", this.imgserviceinfo);
    if (this.imgserviceinfo.length) {
      this.imageSrc = this.imgserviceinfo[0].imgsrc;
    }

  }

  ngAfterViewInit() {

    this.scrollToTop();
  }
  slideImage(imgsrc) {
    this.imageSrc = imgsrc;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
