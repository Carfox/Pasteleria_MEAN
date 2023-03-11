import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CargarService } from 'src/app/services/cargar.service';
import { PastelService } from 'src/app/services/pastel.service';
import { Pastel } from 'src/app/models/pastel';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-buscar-pastel',
  templateUrl: './buscar-pastel.component.html',
  styleUrls: ['./buscar-pastel.component.css'],
  providers:[PastelService,CargarService]
})
export class BuscarPastelComponent implements OnInit{
  public titulo:string;
  // public pastel:Pastel;
  public url:string;
  public pasteles:Pastel[];
  // public archivosParaCargar:Array<File>;
  // @ViewChild('archivoImagen') fileInput:any;

  constructor(
    private _pastelService:PastelService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.titulo="CREAR UNA PARTE";
    this.url=Global.url;
    this.pasteles=[];
    // this.pastel=new Pastel('','','Mora','Grande',0,0,'');
    // this.archivosParaCargar=[];
  }
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let nombre=params['nombre'];
      this.obtenerPastelesPorNombre(nombre);
    });
  }
  obtenerPasteles(){
    this._pastelService.getPasteles().subscribe(
      response=>{
        //console.log(response);
        this.pasteles=response.result;
        console.log(this.pasteles);
      },error=>{
        console.log(<any>error);
      }
    );
  }
  obtenerPastelesPorNombre(nombre:String){
      this._pastelService.getPastelesPorNombre(nombre).subscribe(
        response=>{
          this.pasteles=response.result;
        },error=>{
          console.log(<any>error);
        }
      );
  }
  obtenerPastelPorId(id:String){
    this._pastelService.getPastelPorId(id).subscribe(
      response=>{
        //console.log(response);
      },error=>{
        console.log(<any>error);
      }
    );
  }
}


