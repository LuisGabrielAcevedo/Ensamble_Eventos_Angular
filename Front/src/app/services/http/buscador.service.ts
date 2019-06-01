import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Headers, RequestOptions } from '@angular/http';
import { delay } from 'rxjs/operators';
// Url
import { Global } from './url.service';
import { CancionesService } from './canciones.service';
import { canciones } from '../mocks/mock.canciones';


@Injectable()
export class BuscadorService {
    public searchState: string;
    public url: string;
    public data: Array<any>;
    public headers;
    public options;
    public spotifyToken;
    constructor(
        private _http: Http,
        private _cancionServcie: CancionesService
    ) {
        this.url = Global.url_api;
        this.searchState = 'abrir';
        this.spotifyToken = 'BQDH9o-IOB0TWy7HmZxnKWiK_n06DERM4Bx7F0I6J1LwHzs-msYh_ovpq51JVA4JwBcpj8gLsQyz8Mx3Hpr0QkFzrOxQZ6G0gMxeFEI64BHARj1RUWXpEWO-XkLvTpxQYbf_ij4ELWZd_8lFespanmPLO9EoV4_7-ZHuNM_aL8-MW78s-oZUjE2dxTBtwG3ajSrm0pDvAHimM3PEifO7OG0';
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.spotifyToken
        });
        this.options = new RequestOptions({ headers: this.headers });
    }
    buscarYoutube(term: string): Observable<any> {
        return this._http.get(`https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=AIzaSyBQDrfTg_vB26R4IwvCEuB1AwTWoW9scrE&q=${term}&part=snippet&maxResults=10`)
            .map(res => res.json())
    }
    buscarSpotify(term: string): Observable<any> {
        // let clienId = '606e2ae8a2e041318e1d9d7b98c95c61';
        // return this._http.get(`https://api.spotify.com/v1/search?type=track&market=US&offset=20&limit=10&q=${term}`, this.options)
        // .map(res => res.json())
        return of([]);
    }
    buscarApi(term: string): Observable<any> {
        let termRegular = new RegExp(term, 'gi');
        this.data = [];
        canciones.forEach(cancion => {
            if (cancion.nombre.match(termRegular) || cancion.artista.nombre.match(termRegular)) this.data.push(cancion);
        })

        return of(this.data);
    }
    forkJoinEspecial(term: string) {
        return Observable.forkJoin(
            this.buscarYoutube(term),
            this.buscarSpotify(term),
            this.buscarApi(term)
        )
    }
    autenticacionFacebook() {

    }
    autenticacionSpotify(): Observable<any> {
        let clienId = '606e2ae8a2e041318e1d9d7b98c95c61';
        let rediretUri = 'https://ensambleeventos.herokuapp.com';
        let url = `https://accounts.spotify.com/authorize/?client_id=${clienId}&response_type=code&redirect_uri=${rediretUri}&scope=user-read-private%20user-read-email&state=34fFs29kd09`;
        return this._http.get(url, this.options);
    }
    accesTokenSpotify(): Observable<any> {
        let urlToken = 'https://accounts.spotify.com/api/token';
        let data = {
            "grant_type": "authorization_code",
            "code": "AQA_bTMN3DlYtB7Sm8oypsUBMIIi_YoiwxylRxiy5zaTeMgaoXK2egRFC-pOgClk2bCALSd4KxUAzJnX2KMnGSB9-wH5mETv0AypZ1llSLhbb53tx3MLq8_QeZtfFrUAKtQbUDZuYAyxZhUrBtp5LfItVTWskQwU-KF1WUnWotQfXAy46wY0lbN2t-4mjq8v23BXPwILiJBZNL1dCscPbXR325ntsKDZYaFqf3D8HXtBoTJLdEXvvtjdjFtuF3E",
            "redirect_uri": "https://ensambleeventos.herokuapp.com",
            "client_secret": "673be2d3fb6d4c0896502f20e677a9eb",
            "client_id": "606e2ae8a2e041318e1d9d7b98c95c61",
        }
        return this._http.post(urlToken, data)
            .map(res => res.json());
    }
}