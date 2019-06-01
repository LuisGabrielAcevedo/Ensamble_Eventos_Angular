import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/forkJoin';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

// Url
import { Global } from './url.service';

// Mocks
import { obtenerArtista, listaDeArtistas } from '../mocks/mockUsers';
import { listaUsuarios } from '../mocks/mock.listausuarios';
import { register, editarUser, artistaInfo } from '../mocks/mock.register';
import { login } from '../mocks/mock.identificacion';
import { googleuser } from '../mocks/mock.googleUser';
import {artitasPartituras} from '../mocks/mock.artistas';
import { partituras } from '../mocks/mock.partitura';


// Modelos
import { IUserRegisterRequest, IUserLoginRequest, IUsuario } from '../../models/usuario';
import { ICancionPerfil } from '../../models/cancion';
import { IFollow } from '../../models/follow';
import { IArtistInformationRequest2, IArtistInformationRequest1 } from '../../models/informacionArtista';
import { listaDeSeguidos, listaDeSeguidores } from '../mocks/mock.userMas';
import { IArtistPerfilResponse } from '../../models/artista';
import { LocalStorageService } from '../general/localStorage.service';


@Injectable()
export class UsersService {

  public url;
  public identity;
  public token;

  public headers;
  public options;

  public data: any;
  public canciones: ICancionPerfil[];

  usuario: IUserRegisterRequest;

  constructor(
    private router: Router,
    private _http: Http,
    private localStorageService: LocalStorageService
  ) {

    this.url = Global.url_api;
    // las tenemos que traer despues del servicio de local storage
    if (this.localStorageService.TOKEN) {
      this.token = this.localStorageService.TOKEN;
    } else {
      this.token = null;
    }
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this.token
    });
    this.options = new RequestOptions({ headers: this.headers });
  }
  // 1. Guardar usuario
  registrarUsuario(user: IUserRegisterRequest): Observable<any> {
    const params = JSON.stringify(user);
    return this._http.post(this.url + 'saveUser', params, { headers: this.headers }).map(res => res.json());
  }
  // 2. Identificar usuario
  identificarUsuario(user: IUserLoginRequest): Observable<any> {
    const params = JSON.stringify(user);
    return this._http.post(this.url + 'searchUser', params, { headers: this.headers }).map(res => res.json());
  }
  // 3. Obtener los datos de un usuario de tipo artista o usuario
  obtenerUsuario(id): Observable<IArtistPerfilResponse> {
    // obtenerArtista.forEach((artista) => {
    //   if (artista.artista._id === id) {
    //     this.data = artista;
    //   }
    // });
    // return of(this.data);
    return this._http.get(this.url + 'searchOneUser/' + id, this.options).map(res => res.json());
  }
  // 4. Obtener todos los usuarios de tipo usuario
  obtenerUsuarios(): Observable<any> {
    return this._http.get(this.url + 'getUsers/1', this.options).map(res => res.json());
  }
  // 5. Obtener todos los usuarios de tipo artista
  obtenerArtistas(): Observable<any> {
    return this._http.get(this.url + 'getArtists/1', this.options).map(res => res.json());
  }
  borrarUsuario(id): Observable<any> {
    return this._http.delete(this.url + 'deleteUser/' + id, this.options).map(res => res.json());
  }

  buscarCanciones(id, idAlbum): Observable<ICancionPerfil[]> {
    obtenerArtista.forEach((element) => {
      if (element.artista._id === id) {
        this.data = element;
        this.canciones = this.data.canciones.data.filter(element2 => element2.album === idAlbum);
      }
    });
    return of(this.canciones);
  }

  seguirArtista(id: string): Observable<IFollow> {
    return of({
      _id: '1',
      usuarioQueSigue: 'idToken',
      usuarioSeguido: id
    });
  }

  dejarDeSeguirArtista(id: string): Observable<IFollow> {
    return of({
      _id: null,
      usuarioQueSigue: null,
      usuarioSeguido: null
    });
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/users/login']);
  }

  editarUsuario(data: any, id: string): Observable<any> {
    const params = JSON.stringify(data);
    return this._http.put(this.url + 'updateUser/' + id, params, { headers: this.headers }).map(res => res.json());
  }

  guardarDatosDelArtista(data: IArtistInformationRequest1): Observable<any> {
    const params = JSON.stringify(data);
    return this._http.post(this.url + 'saveArtistInformation', params, { headers: this.headers }).map(res => res.json());
  }

  forkJoinSaveArtistInformationComponent(data1: IArtistInformationRequest1, data2: IArtistInformationRequest2) {
    return Observable.forkJoin(
      this.guardarDatosDelArtista(data1),
      this.editarUsuario(data2, data1.artista)
    );
  }

  editarInformacionArtista(data, id: string): Observable<any> {
    const params = JSON.stringify(data);
    return this._http.put(this.url + 'updateArtistInformation/' + id, params, { headers: this.headers }).map(res => res.json());
  }

  forkJoinEditUserComponent(data1: IArtistInformationRequest1, data2: IUsuario) {
    return Observable.forkJoin(
      this.editarUsuario(data2, data2._id),
      this.editarInformacionArtista(data1, data2._id)
    );
  }

  // Autenticacion por Google
  loginGoogle(token): Observable<any> {
    return of(googleuser);
  }

  getFollowing(): Observable<any> {
    if (this.localStorageService.TOKEN) {
      this.token = this.localStorageService.TOKEN;
    } else {
      this.token = null;
    }
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this.token
    });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http.get(this.url + 'getUsersFollowing/1', this.options).map(res => res.json());
  }

  getFollowed(): Observable<any> {
    if (this.localStorageService.TOKEN) {
      this.token = this.localStorageService.TOKEN;
    } else {
      this.token = null;
    }
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': this.token
    });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http.get(this.url + 'getUsersFollowed/1', this.options).map(res => res.json());
  }



  // Observables de las partituras
  obtenerArtistasMock(id): Observable<any> {
    return of(artitasPartituras);
  }

  getSheetArtistMock(id): Observable<any> {
    return of(partituras);
  }



}
