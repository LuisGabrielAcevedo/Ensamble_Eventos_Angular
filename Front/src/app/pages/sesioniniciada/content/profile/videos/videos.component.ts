import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { UsersService } from '../../../../../services/index.service';
import { IAlbumPerfil } from '../../../../../models/album';
import { IArtistId } from '../../../../../models/artista';
import 'rxjs/add/operator/filter';
import { IVideoPerfil } from '../../../../../models/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  albums: IAlbumPerfil[];
  artistId: IArtistId;
  videos: IVideoPerfil[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsersService,
    private _artistSandbox: ArtistSandbox
  ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
