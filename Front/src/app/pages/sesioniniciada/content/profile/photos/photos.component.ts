import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { UsersService } from '../../../../../services/index.service';
import { IAlbumPerfil } from '../../../../../models/album';
import { IArtistId } from '../../../../../models/artista';
import 'rxjs/add/operator/filter';
import { IFotoPerfil } from '../../../../../models/foto';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  albums: IAlbumPerfil[];
  fotos: IFotoPerfil[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsersService,
    private _artistSandbox: ArtistSandbox
  ) {
    this.albums = null;
    this.fotos = null;
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
