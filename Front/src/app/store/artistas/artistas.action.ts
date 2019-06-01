import { Action } from '@ngrx/store';
import { IArtistId, IArtistPerfilResponse } from '../../models/artista';
import { IFollow } from '../../models/follow';

export const LOAD_ARTIST = '[Profile] Load Artist ';
export const LOAD_ARTIST_SUCCESS = '[Profile] Load Artist Success';
export const REMOVE_ARTIST_DATA = '[Profile] Remove Artist Data';
export const FOLLOW_ARTIST = '[Profile] Follow Artist';
export const FOLLOW_ARTIST_SUCCESS = '[Profile] Follow Artist Success';
export const DELETE_FOLLOW_ARTIST = '[Profile] Delete Follow Artist';
export const DELETE_FOLLOW_ARTIST_SUCCESS = '[Profile] Delete Follow Artist Success';

export class LoadArtistAction implements Action {
    readonly type = LOAD_ARTIST;
    constructor(public payload: IArtistId) {
    }
}

export class LoadArtistSuccessAction implements Action {
    readonly type = LOAD_ARTIST_SUCCESS;
    constructor(public payload: IArtistPerfilResponse) {
    }
}

export class RemoveArtistAction implements Action {
    readonly type = REMOVE_ARTIST_DATA;
    constructor(public payload = null) {
    }
}

export class FollowArtistAction implements Action {
    readonly type = FOLLOW_ARTIST;
    constructor(public payload: IFollow) {
    }
}

export class FollowArtistSuccessAction implements Action {
    readonly type = FOLLOW_ARTIST_SUCCESS;
    constructor(public payload: IFollow) {
    }
}

export class DeleteFollowArtistAction implements Action {
    readonly type = DELETE_FOLLOW_ARTIST;
    constructor(public payload: IFollow) {
    }
}

export class DeleteFollowArtistSuccessAction implements Action {
    readonly type = DELETE_FOLLOW_ARTIST_SUCCESS;
    constructor(public payload = null) {
    }
}

export type Actions
    = LoadArtistAction
    | LoadArtistSuccessAction
    | RemoveArtistAction
    | FollowArtistAction
    | FollowArtistSuccessAction
    | DeleteFollowArtistAction
    | DeleteFollowArtistSuccessAction;
