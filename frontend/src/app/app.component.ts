import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  nombre='';
  constructor(
    private _router:Router,
    private _route:ActivatedRoute
  ){}
  buscarPorNombre(  ){
    this._router.navigate(['/buscar-pastel/'+this.nombre]);
  }
}
