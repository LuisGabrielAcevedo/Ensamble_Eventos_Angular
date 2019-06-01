import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Global } from '../../../../services/http/url.service';
import { ICancion } from '../../../../models/cancion';
import { PlayerSandbox } from '../../../../sandBox/player.sandBox';
import { ICancionActual, IPlayList } from '../../../../models/player';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { IUsuario } from '../../../../models/usuario';
import { ArtistSandbox } from '../../../../sandBox/artist.sandBox';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  @Input() lista: ICancion[];
  @Input() tipo;
  @Input() album: string;
  datos: ICancionActual;
  cancioActual: ICancionActual;
  artist: IUsuario;
  url;
  constructor(
    private playerSandBox: PlayerSandbox,
    private _artistSandbox: ArtistSandbox
  ) {
    this.url = Global.url_api;
  }

  ngOnInit() {
    this.subscriptions.push(
      this._artistSandbox.fetchArtist()
        .filter(artist => artist !== null)
        .subscribe(artist => {
          this.artist = artist
        }),
      this.playerSandBox.fetchCancionActual()
        .subscribe(cancion => {
          this.cancioActual = cancion;
        })
    )
  }

  playSong(cancion: ICancion) {
    this.datos = {
      _idCancion: cancion._id,
      lugarAccionDisparoCancion: 'Album',
      numeroCancion: '',
      nombreCancion: cancion.nombre,
      archivoCancion: cancion.audio,
      duracionCancion: cancion.duracion,
      precioCancion: cancion.precio,
      tipoCancion: cancion.tipo,
      registrationDateCancion: '',
      artista: {
        _idArtista: this.artist._id,
        nombreArtista: this.artist.nombre,
        imagenArtista: this.artist.imagen
      },
      album: {
        _idAlbum: this.album,
        nombreAlbum: '',
        imagenAlbum: ''
      }
    }
    this.playerSandBox.newSong(this.datos);
    let playList:IPlayList = {
      canciones:this.lista,
      nombre: 'hola',
      numeroInicio: 0,
      _id:'1'
    }
    this.playerSandBox.newPlayList(playList);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  controlCancion(cancion: ICancion) {
    if (this.cancioActual && cancion._id == this.cancioActual._idCancion) {
      return {
        'background': '#007bff',
        'color': 'white'
      }
    }
  }
}
