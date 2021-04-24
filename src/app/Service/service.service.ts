import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Persona} from '../Modelo/Persona'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor( private http:HttpClient) { }

  Url= 'http://localhost:8070/usuario/';

  getPersonas(id=''){
    return this.http.get<any>(this.Url+id).pipe(map( (data)=>{
      console.log(data.length);
      let informacion: Persona[]=[];
      if (data.length){
        informacion=data;
      }else {
        informacion.push(data);
      }
      return informacion;
    }))
  }
}
