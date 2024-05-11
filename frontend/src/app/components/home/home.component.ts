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
    { src: '../../../assets/images/slide-1.jpg', alt: 'Pastel de Mora', description: 'Si buscas algo un poco más frutal, nuestro pastel de mora es la opción perfecta. Elaborado con moras frescas y una masa suave y esponjosa, este pastel es un verdadero placer para el paladar. ¡No te lo puedes perder!' },
    { src: '../../../assets/images/slide-2.jpg', alt: 'Pastel de Chocolate', description: 'Un clásico de la repostería, nuestro pastel de chocolate es una deliciosa opción para los amantes del chocolate. Con una textura esponjosa y suave, y un sabor intenso a chocolate, este pastel es perfecto para cualquier ocasión.' },
    { src: '../../../assets/images/slide-3.jpg', alt: 'Tres Chocolates', description: 'Si eres un verdadero amante del chocolate, nuestro pastel bañado en chocolate es para ti. Con una masa suave y esponjosa, este pastel es bañado en una deliciosa capa de chocolate derretido, que lo hace irresistible. ¡Una deliciosa opción para los más golosos!' }
  ];

  activeSlide = { alt: '', description: '' };
  descriptionOut: string = '';

  onSlide(event: NgbSlideEvent) {
    const currentSlideId = event.current.toString();
    const currentSlideElement = document.getElementById(currentSlideId);
    const alt = currentSlideElement?.getAttribute('alt') ?? '';
    const description = this.images[parseInt(event.current)].description;
    this.activeSlide = { alt, description };
    this.descriptionOut = currentSlideElement?.getAttribute('description') ?? '';
  }

}

