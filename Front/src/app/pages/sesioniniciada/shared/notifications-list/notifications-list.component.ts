import { Component, OnInit, Input } from '@angular/core';
import { IUsuario } from '../../../../models/usuario';
import { Subscription } from 'rxjs/Subscription';
import { UserSandbox } from '../../../../sandBox/user.sandBox';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {

@Input() lista;
  user: IUsuario = null;
  subscriptions: Subscription[] = [];

  constructor(
    private userSandBox: UserSandbox
  ) { }

  ngOnInit() {

    this.subscriptions.push(
      this.userSandBox.fetchIdentity()
        .subscribe(identity => {
          this.user = identity;
        })
    );
  }

}
