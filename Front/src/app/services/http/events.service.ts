import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';
// Url
import { Global } from './url.service';
// Mocks
import { eventos } from '../mocks/mock.eventos';
import { IEvento } from '../../models/evento';

@Injectable()
export class EventosService {
    public url;
    public identity;
    public token;

    public headers;
    public options;
    constructor(
        private _http: Http
    ) {
        this.url = Global.url_api;
        this.identity = '';
        this.token = '';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }
    traerEventosArtista(id: string): Observable<IEvento[]> {
        return of(eventos);
    }
}
