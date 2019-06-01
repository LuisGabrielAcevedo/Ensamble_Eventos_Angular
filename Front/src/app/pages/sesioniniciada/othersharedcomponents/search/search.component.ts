import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BuscadorService } from '../../../../services/index.service';
import { PlayerSandbox } from '../../../../sandBox/player.sandBox';

export interface IDataUnificada {
  tipoDataFront: string;
  tipodataApi: string;
  id: string;
  titulo: string;
  descripcion: string;
  archivo: string;
  imagen: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  public youtubeData: Array<any> = null;
  public spotifyData: any = null;
  public apiData: Array<any> = null;
  public data: IDataUnificada[] = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _buscador: BuscadorService,
    private playerSandBox: PlayerSandbox
  ) { }

  ngOnInit() {
    // this._buscador.accesTokenSpotify().subscribe(
    //   resp=>{
    //     console.log(resp);
    //   }
    // )
    this._buscador.searchState = 'cerrar';
    this._route.params.forEach((params: Params) => {
      let value = params['value'];
      this._buscador.forkJoinEspecial(value).subscribe(
        resp => {
          console.log(resp);
          this.youtubeData = resp[0].items;
          this.spotifyData = resp[1];
          this.apiData = resp[2];
          this.unificarData();
        }
      )
    })
    this.loginFacebook();
  }

  buscar(value) {
    this.data = [];
    this._router.navigate(['/other', 'search', value]);
  }

  unificarData() {
    if (this.apiData.length > 0) {
      this.apiData.map(item => {
        let data: IDataUnificada;
        data = {
          tipoDataFront: 'myApi',
          tipodataApi: 'cancion',
          id: item._id,
          titulo: item.nombre,
          descripcion: null,
          archivo: item.audio,
          imagen: item.artista.imagen
        }
        this.data.push(data);
      })
    }

    if (this.youtubeData && this.youtubeData.length > 0) {
      if (this.youtubeData.length > 0) {
        this.youtubeData.map(item => {
          let data: IDataUnificada;
          for (var name in item.id) {
            if (item.id.hasOwnProperty(name)) {
              if (name === 'videoId' || name === 'channelId') {
                data = {
                  tipoDataFront: 'youtube',
                  tipodataApi: name,
                  id: item.id[name],
                  titulo: item.snippet.title,
                  descripcion: item.snippet.description,
                  archivo: null,
                  imagen: item.snippet.thumbnails.high.url
                }
                this.data.push(data);
              }
            }
          }
        })
      }
    }
    if (this.spotifyData && this.spotifyData.length > 0) {
      if (this.spotifyData.tracks.items.length > 0) {
        this.spotifyData.tracks.items.map(item => {
          let data: IDataUnificada;
          data = {
            tipoDataFront: 'spotify',
            tipodataApi: 'track',
            id: item.id,
            titulo: item.name,
            descripcion: null,
            archivo: null,
            imagen: item.album.images[0].url
          }
          this.data.push(data);
        })
      }
    }
  }

  openUrl(item) {
    if (item.tipoDataFront === 'youtube') {
      if (item.tipodataApi === 'videoId') {
        window.open(`https://www.youtube.com/watch?v=${item.id}`)
      } else if (item.tipodataApi === 'channelId') {
        window.open(`https://www.youtube.com/channel/${item.id}`)
      }
    } else if (item.tipoDataFront === 'spotify') {
      window.open(`https://open.spotify.com/track/${item.id}`)
    } else if (item.tipoDataFront === 'myApi') {
      this.reproducir(item);
    }
  }

  itemFrontName(item) {
    if (item.tipoDataFront === 'youtube') {
      if (item.tipodataApi === 'videoId') {
        return 'Video';
      } else if (item.tipodataApi === 'channelId') {
        return 'Canal';
      }
    } else if (item.tipoDataFront === 'spotify') {
      return 'Audio'
    } else if (item.tipoDataFront === 'myApi') {
      if (item.tipodataApi === 'cancion') {
        return 'Audio'
      }
    }
    return 'video';
  }

  itemFromImage(item) {
    if (item.tipoDataFront === 'youtube') {
      return 'assets/adminpro/images/mockImages/youtube.png'
    } else if (item.tipoDataFront === 'spotify') {
      return 'assets/adminpro/images/mockImages/spotify.png'
    } else if (item.tipoDataFront === 'myApi') {
      return 'assets/adminpro/images/mockImages/ensamble.png'
    }
  }

  loginFacebook() {
    this._buscador.autenticacionFacebook()
  }

  reproducir(cancion) {
    let datos = {
      _idCancion: cancion.id,
      lugarAccionDisparoCancion: 'Buscador',
      numeroCancion: '',
      nombreCancion: cancion.titulo,
      archivoCancion: cancion.archivo,
      duracionCancion: '',
      precioCancion: '',
      tipoCancion: '',
      registrationDateCancion: '',
      artista: {
        _idArtista: '',
        nombreArtista: '',
        imagenArtista: cancion.imagen
      },
      album: {
        _idAlbum: '',
        nombreAlbum: '',
        imagenAlbum: ''
      }
    }
    this.playerSandBox.newSong(datos);
  }
  ngOnDestroy() {
    this._buscador.searchState = 'abrir';
  }
}
