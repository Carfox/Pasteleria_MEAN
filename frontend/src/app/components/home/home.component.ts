import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {
  
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
  }

  images = [
    {src: '../../../assets/images/slide-1.jpg', alt: 'Slide 1', id:'slide-1'},
    {src: '../../../assets/images/slide-2.jpg', alt: 'Slide 2', id:'slide-2'},
    {src: '../../../assets/images/slide-3.jpg', alt: 'Slide 3', id:'slide-3'}
  ]


  activeSlideAlt: string = '';

  onSlide(event: NgbSlideEvent) {
    let currentSlideId = event.current.toString();
    let currentSlideElement = document.getElementById(currentSlideId);
    this.activeSlideAlt = currentSlideElement?.getAttribute('alt') ?? '';
  }
}

