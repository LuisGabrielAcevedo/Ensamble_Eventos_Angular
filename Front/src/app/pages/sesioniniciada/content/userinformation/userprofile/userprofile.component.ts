import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from '../../../../../models/usuario';
import { Subscription } from 'rxjs/Subscription';
import { UsersService, LocalStorageService } from '../../../../../services/index.service';
import { UserSandbox } from '../../../../../sandBox/user.sandBox';
import { IArtistInformation } from '../../../../../models/informacionArtista';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html'
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user: IUsuario = null;
  subscriptions: Subscription[] = [];
  datos1: IArtistInformation;
  datos2: IUsuario;
  lista: string[];
  tipo: string;
  tipo1: string;


  constructor(

    private router: Router,
    private _userService: UsersService,
    public localStorageService: LocalStorageService,
    private userSandBox: UserSandbox,
    private _artistSandbox: ArtistSandbox

  ) {
    this.lista = [];
    this.tipo = 'FOLLOWED';
    this.tipo1 = 'FOLLOWIN';

  }

  ngOnInit() {

    this.subscriptions.push(
      this.userSandBox.fetchIdentity()
        .subscribe(identity => {
          this.user = identity;
          this.datos2 = this.user;
        }),
      this.userSandBox.fetchArtistInformation()
        .subscribe(info => {
          this.datos1 = info;
          console.log(this.datos1);
        })
    );

    // Buscar lista de artistas
    this._userService.getFollowing().subscribe(
      resp => {
      this.lista = resp.usuarios;
      },
      error => { console.log(error); });
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
