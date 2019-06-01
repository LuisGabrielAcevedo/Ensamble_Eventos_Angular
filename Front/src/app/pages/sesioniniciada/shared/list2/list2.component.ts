import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IUsuario } from '../../../../models/usuario';
import { LoadingService, MensajeService, UsersService } from '../../../../services/index.service';
import { UserSandbox } from '../../../../sandBox/user.sandBox';
import { ArtistSandbox } from '../../../../sandBox/artist.sandBox';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit, OnDestroy {
  @Input() tipoLista; // es followed o followin
  subscriptions: Subscription[] = [];
  user: IUsuario = null;
  following: string[];
  followed: string[];
  listaSeguidores: string[];
  listaSeguidos: string[];

  constructor(
    private _loadingService: LoadingService,
    private userSandBox: UserSandbox,
    private mensajeService: MensajeService,
    private _userService: UsersService,
    private _artistSandbox: ArtistSandbox


  ) { this.listaSeguidos = []; }

  ngOnInit() {
    this.subscriptions.push(
      this.userSandBox.fetchIdentity()
        .subscribe(identity => {
          this.user = identity;
        })
    );
    // Lista Seguidores
    this._userService.getFollowed().subscribe(
      resp => {
      this.listaSeguidores = resp.usuarios;
      },
      error => { console.log(error); });

    // Lista Seguidos
    this._userService.getFollowing().subscribe(
      resp => {
      this.listaSeguidos = resp.usuarios;
      },

      error => { console.log(error); });

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
