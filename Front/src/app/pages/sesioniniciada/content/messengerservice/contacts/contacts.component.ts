import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../../../services/index.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private _chatService: ChatService) {
  }

  ngOnInit() {
    this._chatService.emit('usersOnlineRequest', null);
    this._chatService.on('usersOnlineResponse', (usuariosConectados: any) => {
      console.log(usuariosConectados);
    });
  }
}
