import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Headers, RequestOptions } from '@angular/http';
// Url
import { Global } from './url.service';
import { IFollow } from '../../models/follow';

@Injectable()
export class FollowsService {
  url;
  identity;
  token;
  headers;
  options;
  constructor(private _http: Http) {
    this.url = Global.url_api;
    this.identity = '';
    this.token = '';
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  seguirArtista(follow: IFollow): Observable<any> {
    const params = JSON.stringify(follow);
    return this._http.post(this.url + 'saveFollow', params, { headers: this.headers }).map(res => res.json());
  }

  dejarDeSeguirArtista(follow: IFollow): Observable<any> {
    return this._http.delete(this.url + `deleteFollow/${follow.usuarioQueSigue}/${follow.usuarioSeguido}`, { headers: this.headers })
    .map(res => res.json());
  }
}
