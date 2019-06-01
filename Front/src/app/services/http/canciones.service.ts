import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
// Url
import { Global } from './url.service';
//Mocks
import { canciones } from '../mocks/mock.canciones';
import { playList } from '../mocks/mock.playList';
import { albums } from '../mocks/mock.albums';


@Injectable()
export class CancionesService {
    public url;
    public identity;
    public token;
    public headers;
    public options;
    public data: any;
    constructor(
        private _http: Http
    ) {
        this.url = Global.url_api;
        this.identity = '';
        this.token = '';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }
    totalCanciones() {
        return of(canciones).pipe(delay(1000));
    }
    myPLayList(): Observable<any> {
        return of(playList).pipe(delay(1000));
    }
    albumsArtista(artita: string): Observable<any> {
        this.data=[];
        albums.forEach(album => {
            if (artita == album.artista) this.data.push(album);
        })
        return of(this.data).pipe(delay(2000));
    }
    cancionesAlbum(album:string):Observable<any>{
        this.data=null;
        albums.forEach(albumItem => {
            if (albumItem._id == album) this.data= albumItem.canciones;
        })
        return of(this.data).pipe(delay(1000));
    }
}