import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAgenciaEgoService {

  constructor( private _http: HttpClient ) {}


 getModels():Observable<any>{
     return this._http.get('http://challenge.agenciaego.tech/models');
 }

 GetModelById(id):Observable<any>{
    return this._http.get('http://challenge.agenciaego.tech/models/'+id);
 }
}
