import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { LocalStorageService, UsersService } from '../../../../../services/index.service';
import { UserSandbox } from '../../../../../sandBox/user.sandBox';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html'
})
export class FollowersComponent implements OnInit {
  lista: string[];
  tipo: string;
  constructor(
    private router: Router,
    public localStorageService: LocalStorageService,
    private userSandBox: UserSandbox,
    private _userService: UsersService,
    private _artistSandbox: ArtistSandbox

  ) {
  this.lista = [];
  this.tipo = 'FOLLOWED';
  }

  ngOnInit() {
    // Borrar datos de artista
    this._artistSandbox.removeArtistData();
    // Buscar lista de artistas
    this._userService.getFollowing().subscribe(
      resp => {
      this.lista = resp.usuarios;
      },
      error => { console.log(error); });
  }
}


