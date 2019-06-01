import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as PlayerActions from '../store/player/player.actions';
import * as fromRoot from '../store';
import { Sandbox } from './index';
import { ICancionActual, IPlayList } from '../models/player';

@Injectable()

export class PlayerSandbox extends Sandbox {

    constructor(protected store: Store<fromRoot.State>) {
        super(store);
    }

    fetchCancionActual(): Observable<ICancionActual> {
        return this.store.select(fromRoot.getCancionActual);
    }

    fetchPlayList(): Observable<IPlayList> {
        return this.store.select(fromRoot.getPLayList);
    }

    fetchPlay(): Observable<boolean> {
        return this.store.select(fromRoot.getPlay);
    }

    fetchIsLoadingPlayer(): Observable<boolean> {
        return this.store.select(fromRoot.getIsLoadingPlayer);
    }

    newPlayList(list:IPlayList): void {
        return this.store.dispatch(new PlayerActions.SelectNewPlayListAction(list));
    }

    newSong(cancion: ICancionActual): void {
        return this.store.dispatch(new PlayerActions.SelectNewSongAction(cancion));
    }

    play(): void {
        return this.store.dispatch(new PlayerActions.PlaySongAction());
    }
    
    pause(): void {
        return this.store.dispatch(new PlayerActions.PauseSongAction());
    }
}