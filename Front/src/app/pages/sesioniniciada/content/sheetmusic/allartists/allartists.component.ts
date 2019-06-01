import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../../../services/index.service';
import { Subscription } from 'rxjs/Subscription';
import { UserSandbox } from '../../../../../sandBox/user.sandBox';
import { IUsuario } from '../../../../../models/usuario';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';

@Component({
  selector: 'app-allartists',
  templateUrl: './allartists.component.html'
})
export class AllArtistsComponent implements OnInit, OnDestroy {
  user: IUsuario = null;
  datos2: IUsuario;
  listaArtistas: string[];
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private _userService: UsersService,
    private userSandBox: UserSandbox,
    private _artistSandbox: ArtistSandbox
  ) { this.listaArtistas = []; }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}



