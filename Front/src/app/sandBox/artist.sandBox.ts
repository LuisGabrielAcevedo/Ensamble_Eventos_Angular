import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as ArtistActions from '../store/artistas/artistas.action';
import * as fromRoot from '../store';
import { Sandbox } from './index';
import { IArtistId } from '../models/artista';
import { IUsuario } from '../models/usuario';
import { IArtistInformation } from '../models/informacionArtista';
import { IAlbumPerfil } from '../models/album';
import { IPublicacionPerfil } from '../models/publicacion';
import { IFollow } from '../models/follow';
import { IFotoPerfil } from '../models/foto';
import { ICancionPerfil } from '../models/cancion';
import { IVideoPerfil } from '../models/video';

@Injectable()

export class ArtistSandbox extends Sandbox {

    constructor(protected store: Store<fromRoot.State>) {
        super(store);
    }

    fetchArtist(): Observable<IUsuario> {
        return this.store.select(fromRoot.getArtist);
    }

    fetchArtistInformation(): Observable<IArtistInformation> {
        return this.store.select(fromRoot.getArtistInformation);
    }

    fetchLoSigo(): Observable<IFollow> {
        return this.store.select(fromRoot.getLoSigo);
    }

    fetchMeSigue(): Observable<IFollow> {
        return this.store.select(fromRoot.getMeSigue);
    }

    loadArtist(id: IArtistId): void {
        return this.store.dispatch(new ArtistActions.LoadArtistAction(id));
    }

    removeArtistData(): void {
        return this.store.dispatch(new ArtistActions.RemoveArtistAction());
    }

    follow(users: IFollow): void {
        return this.store.dispatch(new ArtistActions.FollowArtistAction(users));
    }

    deleteFollow(users: IFollow): void {
        return this.store.dispatch(new ArtistActions.DeleteFollowArtistAction(users));
    }
}
