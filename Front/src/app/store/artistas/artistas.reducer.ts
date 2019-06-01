import * as ArtistActions from './artistas.action';
import { IFollow } from '../../models/follow';
import { IUsuario } from '../../models/usuario';
import { IArtistInformation } from '../../models/informacionArtista';

export interface ArtistState {
    artista: IUsuario;
    informacionArtista: IArtistInformation;
    isLoading: boolean;
    error?: any;
    loSigo: IFollow;
    meSigue: IFollow;
}

export const initialState: ArtistState = {
    artista: null,
    informacionArtista: null,
    isLoading: false,
    error: null,
    loSigo: null,
    meSigue: null
};

export const getArtist = (state: ArtistState) => state.artista;
export const getArtistInformation = (state: ArtistState) => state.informacionArtista;
export const getLoSiguo = (state: ArtistState) => state.loSigo;
export const getMeSigue = (state: ArtistState) => state.meSigue;
export const getIsLoading = (state: ArtistState) => state.isLoading;
export const getError = (state: ArtistState) => state.error;

export function ArtistReducer(state = initialState, action: ArtistActions.Actions) {
    switch (action.type) {
        case ArtistActions.LOAD_ARTIST: {
            return Object.assign({}, state, {
                isLoading: true,
                error: null
            });
        }
        case ArtistActions.LOAD_ARTIST_SUCCESS: {
            return Object.assign({}, state, {
                artista: action.payload.artista,
                informacionArtista : action.payload.informacionArtista,
                loSigo: action.payload.loSigo,
                meSigue: action.payload.meSigue,
                isLoading: false,
                error: null
            });
        }
        case ArtistActions.REMOVE_ARTIST_DATA: {
            return Object.assign({}, state, {
                artista: action.payload,
                informacionArtista: action.payload,
                isLoading: false,
                error: action.payload,
                loSigo: action.payload,
                meSigue: action.payload
            });
        }
        case ArtistActions.FOLLOW_ARTIST: {
            return Object.assign({}, state, {
                isLoading: true,
                error: null
            });
        }
        case ArtistActions.FOLLOW_ARTIST_SUCCESS: {
            return Object.assign({}, state, {
                loSigo: action.payload,
                isLoading: false,
                error: null
            });
        }
        case ArtistActions.DELETE_FOLLOW_ARTIST: {
            return Object.assign({}, state, {
                isLoading: true,
                error: null
            });
        }
        case ArtistActions.DELETE_FOLLOW_ARTIST_SUCCESS: {
            return Object.assign({}, state, {
                loSigo: null,
                isLoading: true,
                error: null
            });
        }
        default: { return state; }
    }
}
