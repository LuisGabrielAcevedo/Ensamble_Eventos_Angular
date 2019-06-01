import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/http/users.service';
import { ArtistSandbox } from '../../../../sandBox/artist.sandBox';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html'
})
export class SearchlistComponent implements OnInit {
  lista: string[];
  tipo: string;
  constructor(
    private _userService: UsersService,
    private _artistSandbox: ArtistSandbox
  ) {
    this.lista = [];
    this.tipo = 'FOLLOWING';
  }

  ngOnInit() {
    // Borrar datos de artista
    this._artistSandbox.removeArtistData();
    // Buscar lista de artistas
    this._userService.obtenerArtistas().subscribe(
      resp => {
        this.lista = resp.artistas;
      },
      error => { console.log(error); });
  }

}
