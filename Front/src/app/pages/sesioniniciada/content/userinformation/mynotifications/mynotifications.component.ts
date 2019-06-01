import { notifications } from './../../../../../services/mocks/mock.notifications';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, UsersService, NotificationsService } from '../../../../../services/index.service';
import { UserSandbox } from '../../../../../sandBox/user.sandBox';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';

NotificationsService

@Component({
  selector: 'app-mynotifications',
  templateUrl: './mynotifications.component.html'
})
export class MyNotificationsComponent implements OnInit {
  lista:string[]
  constructor(
    private router: Router,
    public localStorageService: LocalStorageService,
    private userSandBox : UserSandbox,
    private _userService:UsersService,
    private _notificationService: NotificationsService
  ) {this.lista=[] }

  ngOnInit() {
    this._notificationService.getNotifications(" ").subscribe(
      resp=>{this.lista=resp.notificaciones
        console.log(this.lista)
      },
      error=>{console.log(error)})
  }
}



