import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { LocalStorageService, UsersService } from '../../../../../services/index.service';
import { UserSandbox } from '../../../../../sandBox/user.sandBox';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';




@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html'
})
export class FollowedComponent implements OnInit {
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
  this.tipo = 'FOLLOWING';
  }

  ngOnInit() {
    // Buscar lista de artistas
    this._userService.getFollowed().subscribe(
      resp => {
      this.lista = resp.usuarios;
        console.log(this.lista = resp.usuarios);
      },

      error => { console.log(error); });

       console.log(this.lista)
  }




 
}



