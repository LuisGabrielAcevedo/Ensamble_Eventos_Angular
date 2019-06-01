import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { ICancionActual, IPlayList } from '../../../models/player';
import { PlayerSandbox } from '../../../sandBox/player.sandBox';
import { SidebarService, LocalStorageService, MensajeService } from '../../../services/index.service';
import { IMensaje } from '../../../models/mensaje';


@Component({
  selector: 'app-playermore',
  templateUrl: './playermore.component.html',
  styleUrls: ['./playermore.component.css']
})
export class PlayermoreComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  // Cancion actual
  cancion: ICancionActual;
  // Control play del store
  play: boolean;
  // Control Cargando del store
  cargando: boolean;
  // PlayList Actual
  playListActual: IPlayList;
  // Reproductor
  reproductor;
  // Audio del reproductor
  audio;
  // ciclo
  ciclo;
  // total canciones de la lista
  total: number;
  // numero cancion actual
  numeroCancion: number;
  constructor(
    private playerSandBox: PlayerSandbox,
    private sideBarService: SidebarService,
    private localStorageService: LocalStorageService,
    private mensajeService: MensajeService
  ) {
    this.cancion = null;
    this.playListActual = null;
    this.total = null;
    this.numeroCancion = null;
  }
  ngOnInit() {
    // Identificar reproductor
    this.reproductor = (document.getElementById('player') as any);
    // Identificar audio
    this.audio = document.getElementById('audio');
    // Subscripciones
    this.subscriptions.push(
      // Subscripcion del loading
      this.playerSandBox.fetchIsLoadingPlayer()
        .subscribe(cargando => {
          this.cargando = cargando
        }),
      // Subscripcion de la playlist
      this.playerSandBox.fetchPlayList()
        .subscribe(playList => {
          this.playListActual = playList
          console.log(this.playListActual);
          if (this.playListActual) {
            this.total = playList.canciones.length;
            this.numeroCancion = playList.numeroInicio;
            this.enviarMensaje('OK',`PLAYLIST: ${this.playListActual.nombre}`)
            this.formatearCancion(this.playListActual.canciones[this.numeroCancion])
          } else {

          }
        }),
      // Subscripcion de cancion actual
      this.playerSandBox.fetchCancionActual()
        .subscribe(cancion => {
          this.cancion = cancion;
          if (this.cancion == null) {
            let songPlayerStorage = this.localStorageService.SONG;
            if (songPlayerStorage) {
              this.cancion = songPlayerStorage;
              //this.playerSandBox.newSong(this.cancion);
            } else {
              console.log('no hay cancion en el local storage');
            }
          }
          else {
            this.playFirstSong()
          }
        }),
      // Subscripcion de play
      this.playerSandBox.fetchPlay()
        .subscribe(play => {
          this.play = play
          if (this.play == true) {

          } else if (this.play == false) {

          }
        })
    )
  }
  // Funcion play cancion
  playSong() {
    this.reproductor.play();
    this.playerSandBox.play();
    this.controlBarra()
  }
  // Funcion pause cancion
  pauseSong() {
    this.reproductor.pause();
    this.playerSandBox.pause();
    this.romperCiclo()
  }
  // Funcion siguiente cancion
  siguiente() {
    if (this.playListActual) {
      this.romperCiclo();
      if (this.numeroCancion == this.total - 1) {
        this.numeroCancion=0;
      } else {
        this.numeroCancion++;
      }
      this.formatearCancion(this.playListActual.canciones[this.numeroCancion]);
    }
  }
  // Funcion cancion anterior
  anterior() {
    if (this.playListActual) {
      this.romperCiclo();
      if (this.numeroCancion == 0) {
        this.numeroCancion=this.total-1;
      } else {
        this.numeroCancion = this.numeroCancion - 1;
      }
      this.formatearCancion(this.playListActual.canciones[this.numeroCancion]);
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  playFirstSong() {
    this.romperCiclo();
    if (this.sideBarService.stateRigth == 'hide-rside') {
      setTimeout(() => { this.sideBarService.openRigthSideBar() }, 500)
    }
    this.localStorageService.guardarCancionActual(this.cancion);
    this.audio.setAttribute('src', 'assets/adminpro/mockAudios/' + this.cancion.archivoCancion);
    this.reproductor.load();
    this.reproductor.play();
    this.controlBarra();
  }


  controlBarra() {
    this.ciclo = setInterval(() => {
      let tiempoActual = (document.getElementById('player') as any).currentTime;
      let tiempoTotal = (document.getElementById('player') as any).duration;
      if ((document.getElementById('player') as any).ended == false) {
        let distanciaBarra: any = (tiempoActual * 240) / tiempoTotal;
        //console.log(distanciaBarra);
        (document.getElementById('barraProgreso') as any).style.width = `${distanciaBarra}px`;
      }
      else {
        if (this.playListActual) {
          if (this.numeroCancion == this.total - 1) {
            console.log('Termino la lista');
            this.enviarMensaje('WARNING','Seleccione una nueva cancion o playlist')
            this.romperCiclo();
            // revisar por que se queda pegado cuando uso los botones de siguiente y anterior
          } else {
            this.numeroCancion++;
            console.log(this.playListActual)
            this.formatearCancion(this.playListActual.canciones[this.numeroCancion]);
          }
        } else {
          console.log('Termino la cancion');
          this.enviarMensaje('WARNING','Seleccione una nueva cancion o playlist')
          this.romperCiclo();
        }
      }
    }, 300)
  }

  romperCiclo() {
    clearInterval(this.ciclo);
  }

  Adelantar(posicion) {
    let tiempoActual = (posicion.layerX * ((document.getElementById('player') as any).duration) / 240);
    ((document.getElementById('player') as any).currentTime = tiempoActual);
    (document.getElementById('barraProgreso') as any).style.width = posicion.layerX + 'px';
  };

  formatearCancion(cancion) {
    this.cancion ={
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
        _idArtista: cancion.artista._id,
        nombreArtista: cancion.artista.nombre,
        imagenArtista: cancion.artista.imagen
      },
      album: {
        _idAlbum: cancion.album,
        nombreAlbum: '',
        imagenAlbum: ''
      }
    }
    // this.cancion = {
    //   _idCancion: cancion._id,
    //   nombre: cancion.nombre,
    //   archivo: cancion.audio,
    //   artista: { _id: cancion.usuario._id, nombre: cancion.usuario.nombre, imagen: cancion.usuario.imagen },
    //   album: { _id: cancion.album }
    // }
    // this.playerSandBox.newSong(this.cancion);
  }

  enviarMensaje(type,text){
    //Mensaje
    let datos: IMensaje = { type: type, text: text, autoClose: { state: false, time: 4000 } }
    this.mensajeService.mensaje2(datos);
    //
  }
}
