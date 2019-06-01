import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../services/http/users.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ICancion } from '../../../../../models/cancion';
import { CancionesService } from '../../../../../services/index.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  canciones: ICancion[];
  album: string;
  constructor(
    private _route: ActivatedRoute,
    private _cancionesService: CancionesService
  ) {
    this.canciones = null;
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      let idAlbum = params['idAlbum'];
      this.album = idAlbum;
      this._cancionesService.cancionesAlbum(this.album).subscribe(
        resp => {
          this.canciones = resp;
        }
      )
    })
  }

}
