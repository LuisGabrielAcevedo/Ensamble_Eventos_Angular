import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { EventosService } from '../../../../../services/index.service';
import { IEvento } from '../../../../../models/evento';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { IUsuario } from '../../../../../models/usuario';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls:['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  eventos: IEvento[] = null;
  artist: IUsuario;
  constructor(
    private router: Router,
    private eventoService: EventosService,
    private _artistSandbox: ArtistSandbox
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this._artistSandbox.fetchArtist()
        .filter(artist => artist !== null)
        .subscribe(artist => {
          this.artist = artist;
        })
    )
    this.eventoService.traerEventosArtista('').subscribe(
      resp => {
        console.log(resp);
        this.eventos = resp;
      }
    )
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
