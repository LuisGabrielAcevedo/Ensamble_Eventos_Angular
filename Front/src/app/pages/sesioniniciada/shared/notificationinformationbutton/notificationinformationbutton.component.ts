import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../../services/index.service';


@Component({
  selector: 'app-notificationinformationbutton',
  templateUrl: './notificationinformationbutton.component.html',
  styleUrls: ['./notificationinformationbutton.component.css']
})
export class NotificationinformationbuttonComponent implements OnInit {

  constructor(
    private _notificationsService: NotificationsService,
  ) { }

  ngOnInit() {
  //   this._notificationsService.getSheetArtistMock("").subscribe(
  //     resp => {
  //     this.listSheetforArtist = resp;
  //     console.log(this.listSheetforArtist)
  // },
  // error => { console.log(error); })
  }

}
