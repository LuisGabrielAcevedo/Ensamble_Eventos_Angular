import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { switchMap, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as fromRoot from '../../store';
import * as ArtistActions from './artistas.action';
import * as UserActions from '../users/users.action';
import { UsersService } from '../../services/http/users.service';
import { LoadingService } from '../../services/index.service';
import { FollowsService } from '../../services/http/follows.service';


@Injectable()
export class ArtistEffects {

    constructor(
        private actions$: Actions,
        private store$: Store<fromRoot.State>,
        private artistHTTPService: UsersService,
        private _loadingService: LoadingService,
        private followService: FollowsService
    ) { }

    @Effect()
    loadArtist$: Observable<Action> = this.actions$
        .ofType(ArtistActions.LOAD_ARTIST)
        .map(action => (action as ArtistActions.LoadArtistAction).payload)
        .pipe(
            switchMap((payload) => {
                return this.artistHTTPService.obtenerUsuario(payload._id).map((response) => {
                    return new ArtistActions.LoadArtistSuccessAction(response);
                });
            })
        );

    @Effect()
    followArtist$: Observable<Action> = this.actions$
        .ofType(ArtistActions.FOLLOW_ARTIST)
        .map(action => (action as ArtistActions.FollowArtistAction).payload)
        .pipe(
            switchMap((payload) => {
                return this.followService.seguirArtista(payload).pipe(
                    switchMap((response) => {
                        return [
                            new ArtistActions.FollowArtistSuccessAction(response),
                            new UserActions.AddFollowingAction(response.follow.usuarioSeguido)
                        ];
                    })
                );
            })
        );

    @Effect()
    deleteFollowArtist$: Observable<Action> = this.actions$
        .ofType(ArtistActions.DELETE_FOLLOW_ARTIST)
        .map(action => (action as ArtistActions.DeleteFollowArtistAction).payload)
        .pipe(
            switchMap((payload) => {
                return this.followService.dejarDeSeguirArtista(payload).pipe(
                    switchMap((response) => {
                        return [
                            new ArtistActions.DeleteFollowArtistSuccessAction(response),
                            new UserActions.DeleteFollowingAction(payload.usuarioSeguido)
                        ];
                    })
                );
            })
        );
}
