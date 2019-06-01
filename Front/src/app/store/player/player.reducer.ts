import { ICancionActual, IPlayList } from "../../models/player";
import * as PlayerActions from './player.actions';

export interface PlayerState {
    play: boolean;
    cancionActual: ICancionActual;
    playList: IPlayList;
    isLoading: boolean;
    error: boolean;
}

export const initialState: PlayerState = {
    play: null,
    cancionActual: null,
    playList: null,
    isLoading: null,
    error: null
}

export const getCancionActual = (state: PlayerState) => state.cancionActual;
export const getPlay = (state: PlayerState) => state.play;
export const getPlayList =(state: PlayerState) => state.playList;
export const getIsLoading = (state: PlayerState) => state.isLoading;

export function PlayerReducer(state = initialState, action: PlayerActions.Actions): PlayerState {
    switch (action.type) {
        case PlayerActions.SELECT_NEW_SONG: {
            return Object.assign({}, state, {
                play: true,
                isLoading: true,
            });
        }
        case PlayerActions.SELECT_NEW_SONG_SUCCESS: {
            return Object.assign({}, state, {
                cancionActual: action.payload,
                isLoading: null,
            });
        }
        case PlayerActions.PLAY_SONG: {
            return Object.assign({}, state, {
                play: true,
            });
        }
        case PlayerActions.PAUSE_SONG: {
            return Object.assign({}, state, {
                play: false,
            });
        }
        case PlayerActions.SELECT_NEW_PLAYLIST: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case PlayerActions.SELECT_NEW_PLAYLIST_SUCCESS: {
            //console.log(action.payload)
            return Object.assign({}, state, {
                playList: action.payload,
                isLoading: null,
            });
        }
        default: { return state; }
    }
}