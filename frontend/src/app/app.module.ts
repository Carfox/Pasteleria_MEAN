import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrearPastelComponent } from './components/crear-pastel/crear-pastel.component';
import { PastelesComponent } from './components/pasteles/pasteles.component';
import { BuscarPastelComponent } from './components/buscar-pastel/buscar-pastel.component';
import { DetallePastelComponent } from './components/detalle-pastel/detalle-pastel.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearPastelComponent,
    PastelesComponent,
    BuscarPastelComponent,
    DetallePastelComponent,
    ContactoComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule, 
    AccordionModule.forRoot(), // Agrega el módulo de ngx-bootstrap acordeón a la lista de imports
    NgbModule,
    NgbCarouselModule,
    NgIf

  ],
  exports: [
    ContactoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

