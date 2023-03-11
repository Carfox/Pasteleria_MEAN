import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CargarService } from 'src/app/services/cargar.service';
import { PastelService } from 'src/app/services/pastel.service';
import { Pastel } from 'src/app/models/pastel';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-crear-pastel',
  templateUrl: './crear-pastel.component.html',
  styleUrls: ['./crear-pastel.component.css'],
  providers:[PastelService,CargarService]
})
export class CrearPastelComponent implements OnInit{
  public titulo:string;
  public pastel:Pastel;
  public url:string;
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;

  constructor(
    private _pastelService:PastelService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.titulo="CREAR UNA PARTE";
    this.url=Global.url;
    this.pastel=new Pastel('','','Mora','Grande',0,0,'');
    this.archivosParaCargar=[];
  }
  ngOnInit(): void {
    //this.obtenerPartes();
  }
  guardarPastel(form:NgForm){
    this._pastelService.postPastel(this.pastel).subscribe(
      response=>{
        //console.log(response);
        if(response.result){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(this.url+'subir-imagen/'+response.result._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              //console.log(result);
              //this.libroGuardar=result.response;
              //this.status='success';
              //console.log(result.response.result._id);
              //this.idGuardado=result.result._id;
              form.reset();
              this.fileInput.nativeElement.value='';
            });
          }else{
            console.log("No hay archivos para cargar");
          }
        }else{
          //
        }
      },error=>{
        console.log(<any>error);
      }
    );
  }
  obtenerPasteles(){
    this._pastelService.getPasteles().subscribe(
      response=>{
        //console.log(response);
      },error=>{
        console.log(<any>error);
      }
    );
  }
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
  obtenerPastelesPorNombre(nombre:String){
      this._pastelService.getPastelesPorNombre(nombre).subscribe(
        response=>{
          //console.log(response);
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
