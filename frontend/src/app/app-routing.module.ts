import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearPastelComponent } from './components/crear-pastel/crear-pastel.component';
import { BuscarPastelComponent } from './components/buscar-pastel/buscar-pastel.component';
import { DetallePastelComponent } from './components/detalle-pastel/detalle-pastel.component';
import { HomeComponent } from './components/home/home.component';
import { PastelesComponent } from './components/pasteles/pasteles.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'buscar-pastel/:nombre',component:BuscarPastelComponent},
  {path:'pasteles',component:PastelesComponent},
  {path:'pasteles/:id',component:DetallePastelComponent},
  {path:'crear-pastel',component:CrearPastelComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
