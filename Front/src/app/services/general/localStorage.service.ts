import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from '../../models/usuario';
import { IPlayList, ICancionActual } from '../../models/player';
import { IArtistInformation } from '../../models/informacionArtista';


@Injectable()
export class LocalStorageService {
  IDENTITY: IUsuario;
  TOKEN: string;
  FOLLOWING: string[];
  SONG: ICancionActual;
  PLAYLIST: IPlayList;
  FOLLOWED: string[];
  ARTISTINFORMATION: IArtistInformation;

  constructor(
    public http: HttpClient
  ) {

  }
  guardarIdentity(user: IUsuario) {
    localStorage.setItem('identityEnsamble', JSON.stringify(user));
  }

  guardarToken(token: string) {
    console.log(token);
    localStorage.setItem('tokenEnsamble', JSON.stringify(token));
  }

  guardarFollowing(following: string[]) {
    localStorage.setItem('followingEnsamble', JSON.stringify(following));
  }

  guardarArtistInformation(data: IArtistInformation) {
    localStorage.setItem('artistInformationEnsamble', JSON.stringify(data));
  }

  guardarFollowed(followed: string[]) {
    localStorage.setItem('followedEnsamble', JSON.stringify(followed));
  }

  guardarCancionActual(song: ICancionActual) {
    localStorage.setItem('songEnsamble', JSON.stringify(song));
  }

  guardarPlayListActual(playList: IPlayList) {
    localStorage.setItem('playListEnsamble', JSON.stringify(playList));
  }

  obtenerDatosLocalStorage() {
    this.IDENTITY = JSON.parse(localStorage.getItem('identityEnsamble'));
    this.FOLLOWING = JSON.parse(localStorage.getItem('followingEnsamble'));
    this.SONG = JSON.parse(localStorage.getItem('songEnsamble'));
    this.PLAYLIST = JSON.parse(localStorage.getItem('playListEnsamble'));
    this.FOLLOWED = JSON.parse(localStorage.getItem('followedEnsamble'));
    this.ARTISTINFORMATION = JSON.parse(localStorage.getItem('artistInformationEnsamble'));
    this.TOKEN = JSON.parse(localStorage.getItem('tokenEnsamble'));

  }

  BorrarDatosLogueo() {
    localStorage.removeItem('identityEnsamble');
    localStorage.removeItem('followingEnsamble');
    localStorage.removeItem('followedEnsamble');
    localStorage.removeItem('artistInformationEnsamble');
    localStorage.removeItem('tokenEnsamble');
  }
}
