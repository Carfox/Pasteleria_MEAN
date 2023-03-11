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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearPastelComponent,
    PastelesComponent,
    BuscarPastelComponent,
    DetallePastelComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
