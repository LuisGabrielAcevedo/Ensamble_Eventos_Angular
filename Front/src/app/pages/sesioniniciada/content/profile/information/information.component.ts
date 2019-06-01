import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService, LoadingService, MensajeService } from '../../../../../services/index.service';
import { IArtistId, IArtistPerfilResponse } from '../../../../../models/artista';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { IUsuario } from '../../../../../models/usuario';
import { IArtistInformation } from '../../../../../models/informacionArtista';
import { Global } from '../../../../../services/http/url.service';
import { IFollow } from '../../../../../models/follow';
import { UserSandbox } from '../../../../../sandBox/user.sandBox';
import { IMensaje } from '../../../../../models/mensaje';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  artistId: IArtistId;
  artist: IUsuario;
  user: IUsuario;
  loSigo: IFollow;
  meSigue: IFollow;
  url;
  information: IArtistInformation;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsersService,
    private _loadingService: LoadingService,
    private _artistSandbox: ArtistSandbox,
    private _userSandBox: UserSandbox,
    private mensajeService: MensajeService
  ) {
    this.artist = null;
    this.information = null;
    this.loSigo = null;
    this.meSigue = null;
    this.url = Global.url_api;
  }

  ngOnInit() {
    this.subscriptions.push(
      this._artistSandbox.fetchLoSigo()
        .subscribe(loSigo => {
          this.loSigo = loSigo;
        }),
      this._artistSandbox.fetchMeSigue()
        .subscribe(meSigue => {
          this.meSigue = meSigue;
        }),
      this._artistSandbox.fetchArtist()
        .filter(artist => artist !== null)
        .subscribe(artist => {
          this.artist = artist;
        }),
      this._artistSandbox.fetchArtistInformation()
        .filter(information => information !== null)
        .subscribe(information => {
          this.information = information;
        }),
      this._userSandBox.fetchIdentity()
        .subscribe(user => {
          this.user = user;
        })
    );
    this._loadingService.close();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  follow() {
    if (this.user) {
      const follow: IFollow = {
        usuarioQueSigue: this.user._id,
        usuarioSeguido: this.artist._id
      };
      this._artistSandbox.follow(follow);
    } else {
      this.sendWarning();
    }
  }
  deleteFollow() {
    const follow: IFollow = {
      usuarioQueSigue: this.user._id,
      usuarioSeguido: this.artist._id
    };
    this._artistSandbox.deleteFollow(follow);
  }

  sendWarning() {
    const datos: IMensaje = {
      type: 'WARNING',
      text: '¡Debes poseer una cuenta y estar indentificado para poder disfrutar de todos nuestros servicios!',
      autoClose: { state: true, time: 4000 }
    };
    this.mensajeService.mensaje1(datos);
  }
}
