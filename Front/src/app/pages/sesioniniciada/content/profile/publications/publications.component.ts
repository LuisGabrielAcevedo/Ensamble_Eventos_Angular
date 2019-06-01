import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { IArtistId } from '../../../../../models/artista';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { Global } from '../../../../../services/http/url.service';
import { IPublicacionPerfil } from '../../../../../models/publicacion';
import { IUsuario } from '../../../../../models/usuario';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit, OnDestroy {
  newPublicationState: boolean;
  subscriptions: Subscription[] = [];
  artistId: IArtistId;
  artist: IUsuario;
  publications: IPublicacionPerfil[];
  url;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _artistSandbox: ArtistSandbox

  ) {
    this.publications = null;
    this.artist = null;
    this.url = Global.url_api;
    this.newPublicationState = false;
  }
  ngOnInit() {
    this.subscriptions.push(
      this._artistSandbox.fetchArtist()
        .filter(artist => artist !== null)
        .subscribe(artist => {
          this.artist = artist;
        })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
