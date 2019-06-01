import { CancionesService } from '../../../../services/index.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PlayerSandbox } from '../../../../sandBox/player.sandBox';
import { Subscription } from 'rxjs/Subscription';
import { ICancion } from '../../../../models/cancion';


@Component({
  selector: 'app-songslist',
  templateUrl: './songslist.component.html',
  styleUrls: ['./songslist.component.css']
})
export class SongslistComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  canciones = [];
  cancioActual;
  datos;
  constructor(
    private cancionesService: CancionesService,
    private playerSandBox: PlayerSandbox
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.playerSandBox.fetchCancionActual()
        .subscribe(cancion => {
          this.cancioActual = cancion;
        })
    )
    this.cancionesService.totalCanciones().subscribe(
      resp => {
        this.canciones = resp;
      }
    )
  }
  playSong(cancion, numero) {
    this.datos = {
      _idCancion: cancion._id,
      lugarAccionDisparoCancion: 'Lista inicio',
      numeroCancion: numero,
      nombreCancion: cancion.nombre,
      archivoCancion: cancion.audio,
      duracionCancion: cancion.duracion,
      precioCancion: cancion.precio,
      tipoCancion: cancion.tipo,
      registrationDateCancion: '',
      artista: {
        _idArtista: cancion.artista._id,
        nombreArtista: cancion.artista.nombre,
        imagenArtista: cancion.artista.imagen,
      },
      album: {
        _idAlbum: cancion.album,
        nombreAlbum: null,
        imagenAlbum: null,
      }
    }
    this.playerSandBox.newSong(this.datos);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  controlCancion(cancion: ICancion) {
    if (this.cancioActual && cancion._id == this.cancioActual._id) {
      return {
        'background': '#007bff',
        'color': 'white'
      }
    }
  }

}
