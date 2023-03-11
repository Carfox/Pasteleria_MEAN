import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CargarService } from 'src/app/services/cargar.service';
import { PastelService } from 'src/app/services/pastel.service';
import { Pastel } from 'src/app/models/pastel';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-detalle-pastel',
  templateUrl: './detalle-pastel.component.html',
  styleUrls: ['./detalle-pastel.component.css'],
  providers:[PastelService,CargarService]
})
export class DetallePastelComponent implements OnInit{
  public titulo:string;
  public pastel:Pastel;
  public url:string;
  public pasteles:Pastel[];
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
    this.pastel=new Pastel('','','','',0,0,'');
    this.archivosParaCargar=[];
    this.pasteles=[];
  }
  ngOnInit(): void {
    this.obtenerPasteles();
    this._route.params.subscribe(params=>{
      let id=params['id'];
      this.obtenerPastelPorId(id);
    });
  }
  actualizarPastelPorId(form:NgForm){
    this._pastelService.putPastelPorId(this.pastel).subscribe(
      response=>{
        //console.log(response);
        if(response.result){
          if(this.archivosParaCargar.length>0){
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
          this._router.navigate(['/pasteles']);
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
        this.pasteles=response.result;
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
        this.pastel=response.result;
      },error=>{
        console.log(<any>error);
      }
    );
  }
  eliminarPastelPorId(){
    this._pastelService.deletePastelPorId(this.pastel._id).subscribe(
      response=>{
        //this.pastel=response.result;
        this._router.navigate(['/pasteles']);
      },error=>{
        console.log(<any>error);
      }
    );
  }
}

