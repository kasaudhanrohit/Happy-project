import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutInfoComponent implements OnInit {

  constructor() { }
  ngAfterViewInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngOnInit(): void {
  }

}
