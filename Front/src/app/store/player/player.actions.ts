import { Action } from '@ngrx/store';
import { ICancionActual, IPlayList } from '../../models/player';

export const PLAY_SONG = '[Player] Play Song';
export const PAUSE_SONG = '[Player] Pause Song';
export const SELECT_NEW_SONG = '[Player] Select new Song';
export const SELECT_NEW_SONG_SUCCESS = '[Player] Select new Song Success';
export const SELECT_NEW_PLAYLIST = '[Player] Select new Playlist';
export const SELECT_NEW_PLAYLIST_SUCCESS = '[Player] Select new Playlist Success';

export class PlaySongAction implements Action {
    readonly type = PLAY_SONG;
    constructor() {
    }
}

export class PauseSongAction implements Action {
    readonly type = PAUSE_SONG;
    constructor() {
    }
}

export class SelectNewSongAction implements Action {
    readonly type = SELECT_NEW_SONG;
    constructor(public payload: ICancionActual) {
    }
}

export class SelectNewSongSuccessAction implements Action {
    readonly type = SELECT_NEW_SONG_SUCCESS;
    constructor(public payload: ICancionActual) {
    }
}

export class SelectNewPlayListAction implements Action {
    readonly type = SELECT_NEW_PLAYLIST;
    constructor(public payload: IPlayList) {
    }
}

export class SelectNewPlayListSuccessAction implements Action {
    readonly type = SELECT_NEW_PLAYLIST_SUCCESS;
    constructor(public payload: IPlayList) {
    }
}


export type Actions
    = PlaySongAction
    | PauseSongAction
    | SelectNewSongAction
    | SelectNewSongSuccessAction
    | SelectNewPlayListAction
    | SelectNewPlayListSuccessAction;
