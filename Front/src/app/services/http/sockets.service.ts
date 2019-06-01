import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {
    public socket;
    private url;
    constructor() {
        // this.url = 'http://localhost:4001';
        this.url = 'https://ensamblechat.herokuapp.com/';
        this.socket = io(this.url);
    }

    on(eventName: any, callback: any) {
        if (this.socket) {
            this.socket.on(eventName, function (data: any) {
                callback(data);
                console.log(eventName);
            });
        }
    }

    emit(eventName: any, data: any) {
        if (this.socket) {
            this.socket.emit(eventName, data);
            console.log(eventName);
        }
    }
}
