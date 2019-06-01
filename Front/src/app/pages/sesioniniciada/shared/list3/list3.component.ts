
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserSandbox } from '../../../../sandBox/user.sandBox';
import { UsersService } from '../../../../services/index.service';
import { IUsuario } from '../../../../models/usuario';
import { ArtistSandbox } from '../../../../sandBox/artist.sandBox';



@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.css']
})
export class List3Component implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  user: IUsuario = null;
  listaArtistas: string[];

  constructor(
    private userSandBox: UserSandbox,
    private _userService: UsersService,
    private _artistSandbox: ArtistSandbox
  ) { this.listaArtistas = []; }

  ngOnInit() {
    // identificamos el usuario
    this.subscriptions.push(
      this.userSandBox.fetchIdentity()
        .subscribe(identity => {
          this.user = identity;
          console.log(this.user);
        })
    );


    // Borrar datos de artista
    this._artistSandbox.removeArtistData();
    // listamos los artistas
    this._userService.obtenerArtistasMock(' ').subscribe(
      resp => {
        this.listaArtistas = resp;
      },

      error => { console.log(error); });


  } // FIN ngOnInit

  click() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
