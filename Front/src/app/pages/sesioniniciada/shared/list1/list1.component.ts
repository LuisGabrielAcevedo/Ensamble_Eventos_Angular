import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Global } from '../../../../services/http/url.service';
import { LoadingService, MensajeService, FollowsService } from '../../../../services/index.service';
import { Subscription } from 'rxjs/Subscription';
import { UserSandbox } from '../../../../sandBox/user.sandBox';
import { IUsuario, IUsuarioList } from '../../../../models/usuario';
import { IMensaje } from '../../../../models/mensaje';
import { IFollow } from '../../../../models/follow';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  @Input() lista: IUsuarioList[];
  @Input() tipoLista: string;
  user: IUsuario = null;
  following: string[];
  followed: string[];
  url;
  constructor(
    public _loadingService: LoadingService,
    private userSandBox: UserSandbox,
    private mensajeService: MensajeService,
    private followService: FollowsService
  ) {
    this.url = Global.url_api;
  }
  ngOnInit() {
    this.subscriptions.push(
      this.userSandBox.fetchIdentity()
        .subscribe(identity => {
          this.user = identity;
        }),
      this.userSandBox.fetchFollowing()
        .subscribe(following => {
          this.following = following;
        }),
      this.userSandBox.fetchFollowed()
        .subscribe(followed => {
          this.followed = followed;
        })
    );
  }

  click() {
  }

  follow(id: string) {
    if (this.user) {
      const follow: IFollow = {
        usuarioQueSigue: this.user._id,
        usuarioSeguido: id
      };
      this._loadingService.startLoading();
      this.followService.seguirArtista(follow).subscribe(
        resp => {
          this._loadingService.stopLoading();
          if (resp.estadoRespuesta === 'OK') { this.userSandBox.addFollowing(id); }
        },
        error => {
          this._loadingService.stopLoading();
          console.log(error);
        }
      );
    } else {
      this.sendWarning();
    }
  }

  deleteFollow(id: string) {
    const follow: IFollow = {
      usuarioQueSigue: this.user._id,
      usuarioSeguido: id
    };
    this._loadingService.startLoading();
    this.followService.dejarDeSeguirArtista(follow).subscribe(
      resp => {
        this._loadingService.stopLoading();
        if (resp.estadoRespuesta === 'OK') { this.userSandBox.deleteFollowing(id); }
      },
      error => {
        this._loadingService.stopLoading();
        console.log(error);
      }
    );
  }

  sendWarning() {
    const datos: IMensaje = {
      type: 'WARNING',
      text: '¡Debes poseer una cuenta y estar indentificado para poder disfrutar de todos nuestros servicios!',
      autoClose: { state: true, time: 4000 }
    };
    this.mensajeService.mensaje1(datos);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
