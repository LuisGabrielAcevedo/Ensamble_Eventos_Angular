import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { LoadingService, LocalStorageService, ChatService } from '../../services/index.service';
import { PlayerSandbox } from '../../sandBox/player.sandBox';
import { UserSandbox } from '../../sandBox/user.sandBox';
import { IUsuario } from '../../models/usuario';

// funcion creada para forzar el llamado desde angular del /js/custom.js
declare function init_plugins();

@Component({
  selector: 'app-sesioniniciada',
  templateUrl: './sesioniniciada.component.html'
})
export class SesionIniciadaComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  user: IUsuario = null;
  // play: boolean;
  // rotar: string = 'apagado'
  // myTimer;
  constructor(
    public _loadingService: LoadingService,
    public playerSandBox: PlayerSandbox,
    public userSandBox: UserSandbox,
    public localStorageService: LocalStorageService,
    public chatService: ChatService
  ) { }

  ngOnInit() {
    init_plugins();
    this.subscriptions.push(
      this.userSandBox.fetchIdentity()
        .subscribe(identity => {
          if (!identity) {
            if (this.localStorageService.IDENTITY) {
              this.userSandBox.loadUser(this.localStorageService.IDENTITY);
              this.userSandBox.loadFollowing(this.localStorageService.FOLLOWING);
              this.userSandBox.loadFollowed(this.localStorageService.FOLLOWED);
              this.userSandBox.loadToken(this.localStorageService.TOKEN);
              if (this.localStorageService.IDENTITY.rol !== ('Usuario' || 'Admin')) {
                this.userSandBox.loadArtistInformation(this.localStorageService.ARTISTINFORMATION);
              }
              this.conectarUsuario(this.localStorageService.IDENTITY);
            } else {
            }
          } else {
            this.user = identity;
          }
        })
    );
  }

  conectarUsuario(user: IUsuario) {
    const usuario = {
      id: user._id,
      name: user.nombreUsuario,
      imagen: user.imagen
    };
    this.chatService.emit('connectUser', { usuario });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}

// this.subscriptions.push(
    //   this.playerSandBox.fetchPlay()
    //     .subscribe(play => {
    //       this.play = play
    //       if (this.play == true) {
    //         this.myTimer = setInterval(function () {
    //           if (this.rotar == 'apagado') {
    //             this.rotar = 'encendido';
    //             document.getElementById('cambiarColor').style.background = "#398bf7";
    //           } else {
    //             this.rotar = 'apagado';
    //             document.getElementById('cambiarColor').style.background = "#383f48";
    //           }
    //         }, 200);
    //       } else if (this.play == false) {
    //         document.getElementById('cambiarColor').style.background = "#383f48";
    //         clearInterval(this.myTimer);
    //       }
    //     })
    // )
