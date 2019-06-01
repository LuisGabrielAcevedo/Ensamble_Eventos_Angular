import { Injectable } from '@angular/core';
import { Global } from './url.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IDataBaseSearchCollection, dataCollectionRequest, dataIdCollectionRequest, IDataBaseSearchIdCollection } from '../../models/baseDeDatos';

@Injectable()
export class DataBaseService {
    url;
    headers;
    options;

  constructor(
    private _http: Http
  ) {

    this.url = Global.url_api;
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  // 1. Consultar informacion de una coleccion
  buscarColeccionInfo(data:dataCollectionRequest) : Observable<IDataBaseSearchCollection>{
    let params = JSON.stringify(data.dataRequest.data);
    return this._http.post(this.url +'collectionInfo/'+data.dataRequest.page,params, this.options).map(res => res.json()); 
  }

  // 2. Obtener el menu de colecciones
  buscarColecciones() : Observable<any>{
    return this._http.get(this.url +'collectionMenu', this.options).map(res => res.json());
  }

  // 3. Buscar un id en un coleccion
  buscarIdCollection(data:dataIdCollectionRequest): Observable<IDataBaseSearchIdCollection>{
    let params = JSON.stringify(data);
    return this._http.post(this.url +'collectionId',params, this.options).map(res => res.json());
  }

  // 4. Borrar todos los datos de una coleccion
  borrarDatosCollection(tipo:string) : Observable<any>{
    let data={
      tipo:tipo
    }
    let params = JSON.stringify(data);
    return this._http.post(this.url +'removeCollectionData',params, this.options).map(res => res.json());
  }
  
  // 5. Borrar un id en una coleccion
  borrarIdCollection(data:dataIdCollectionRequest): Observable<IDataBaseSearchIdCollection>{
    let params = JSON.stringify(data);
    return this._http.post(this.url +'removeCollectionId',params, this.options).map(res => res.json());
  }
}
