import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArtistSandbox } from '../../../../sandBox/artist.sandBox';
import { IArtistId } from '../../../../models/artista';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { IUsuario } from '../../../../models/usuario';
import { LoadingService } from '../../../../services/index.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  artistId: IArtistId;
  artist: IUsuario;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _artistSandbox: ArtistSandbox,
    private _loadingService: LoadingService
  ) {
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];
      this.artistId = { _id: id };

      this.subscriptions.push(
        this._artistSandbox.fetchArtist()
          .subscribe(artist => {
            if (artist === null) {
              this._artistSandbox.loadArtist(this.artistId);
            } else {
              this.artist = artist;
            }
          })
      );
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
