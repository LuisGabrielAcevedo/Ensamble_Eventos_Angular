import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService, LocalStorageService, ChatService } from '../../../../services/index.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserSandbox } from '../../../../sandBox/user.sandBox';
import { IUsuario } from '../../../../models/usuario';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {
  user: IUsuario = null;
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    public _sidebar: SidebarService,
    public localStorageService: LocalStorageService,
    private userSandBox: UserSandbox,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.userSandBox.fetchIdentity()
        .subscribe(identity => {
          this.user = identity;
        })
    );
  }

  logout() {
    this.userSandBox.deleteUser();
    this.userSandBox.deleteAllFollowing();
    this.userSandBox.deleteAllFollowed();
    this.userSandBox.deleteArtistInformation();
    this.localStorageService.BorrarDatosLogueo();
    // Prueba deslogueo
    const usuario = {
      id: this.user._id
    };
    this.chatService.emit('disconnectUser', { usuario });
    //
    location.reload();
    // if (this._route.snapshot.routeConfig.path === 'home') {
    // } else {
    //   this.router.navigate(['/home']);
    // }
  }


  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
