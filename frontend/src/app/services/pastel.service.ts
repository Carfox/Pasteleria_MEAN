import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

import { Pastel } from '../models/pastel';
@Injectable()
export class PastelService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    postPastel(pastel:Pastel):Observable<any>{
        let params=JSON.stringify(pastel);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'pastel',params,{headers:headers});
    }
    getPastelesPorNombre(nombre:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'pastelN/'+nombre,{headers:headers});
    }
    getPasteles():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'pastel',{headers:headers});
    }
    deletePastelPorId(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'pastel/'+id,{headers:headers});
    }
    putPastelPorId(pastel:Pastel):Observable<any>{
        let params=JSON.stringify(pastel);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'pastel',params,{headers:headers});
    }
    getPastelPorId(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'pastel/'+id,{headers:headers});
    }
}