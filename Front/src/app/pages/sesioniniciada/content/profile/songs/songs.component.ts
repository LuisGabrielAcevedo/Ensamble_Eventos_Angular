import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { CancionesService } from '../../../../../services/index.service';
import { IAlbum } from '../../../../../models/album';
import 'rxjs/add/operator/filter';
import { ICancion } from '../../../../../models/cancion';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html'
})
export class SongsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  albums: IAlbum[];
  artistId: string;
  tipo: string = 'AUDIO';
  constructor(
    private _artistSandbox: ArtistSandbox,
    private _cancionesService: CancionesService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this._artistSandbox.fetchArtist()
        .filter(artist => artist !== null)
        .subscribe(artist => {
          this.artistId = artist._id;
        })
    )
    this._cancionesService.albumsArtista(this.artistId).subscribe(
      resp=>{
        this.albums=resp;
      }
    )
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
