import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as fromRoot from '../../store';
import * as PlayerActions from './player.actions';

@Injectable()
export class PlayerEffects {

    constructor(
        private actions$: Actions,
        private store$: Store<fromRoot.State>,
    ) { }

    @Effect()
    selecNewSong$: Observable<Action> = this.actions$
    .ofType(PlayerActions.SELECT_NEW_SONG)
    .pipe(
        map(action => (action as PlayerActions.SelectNewSongAction).payload),
        switchMap((payload) => {
            return [new PlayerActions.SelectNewSongSuccessAction(payload)];
        })
    );

    @Effect()
    selecNewPlayList$: Observable<Action> = this.actions$
    .ofType(PlayerActions.SELECT_NEW_PLAYLIST)
    .pipe(
        map(action => (action as PlayerActions.SelectNewPlayListAction).payload),
        switchMap((payload) => {
            return [new PlayerActions.SelectNewPlayListSuccessAction(payload)];
        })
    );
}
