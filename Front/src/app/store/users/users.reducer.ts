import * as UserActions from './users.action';
import { IUsuario } from '../../models/usuario';
import 'rxjs/add/operator/filter';
import { IArtistInformation } from '../../models/informacionArtista';


export interface UserState {
    identity: IUsuario;
    artistInformation: IArtistInformation;
    token: string;
    following: string[]; // Lista de usuarios que sigue
    followed: string[]; // Lista de usuarios que lo sigue
    socketUserId: string;
}

export const initialState: UserState = {
    identity: null,
    artistInformation: null,
    token: null,
    following: [],
    followed: [],
    socketUserId: null
};

export const getIdentity = (state: UserState) => state.identity;
export const getArtistInformation = (state: UserState) => state.artistInformation;
export const getToken = (state: UserState) => state.token;
export const getFollowing = (state: UserState) => state.following;
export const getFollowed = (state: UserState) => state.followed;
export const getSocketUserId = (state: UserState) => state.socketUserId;

export function UserReducer(state = initialState, action: UserActions.Actions) {
    switch (action.type) {
        case UserActions.LOAD_USER: {
            return Object.assign({}, state, {
                identity: action.payload
            });
        }
        case UserActions.LOAD_ARTIST_INFORMATION: {
            return Object.assign({}, state, {
                artistInformation: action.payload
            });
        }
        case UserActions.LOAD_SOCKET_ID: {
            return Object.assign({}, state, {
                socketUserId: action.payload
            });
        }
        case UserActions.LOAD_TOKEN: {
            return Object.assign({}, state, {
                token: action.payload
            });
        }
        case UserActions.DELETE_TOKEN: {
            return Object.assign({}, state, {
                token: action.payload
            });
        }
        case UserActions.DELETE_SOCKET_ID: {
            return Object.assign({}, state, {
                socketUserId: action.payload
            });
        }
        case UserActions.DELETE_USER: {
            return Object.assign({}, state, {
                identity: action.payload
            });
        }
        case UserActions.DELETE_ARTIST_INFORMATION: {
            return Object.assign({}, state, {
                artistInformation: action.payload
            });
        }
        case UserActions.LOAD_FOLLOWING: {
            return Object.assign({}, state, {
                following: action.payload
            });
        }
        case UserActions.ADD_FOLLOWING: {
            return Object.assign({}, state, {
                following: state.following.concat(action.payload)
            });
        }
        case UserActions.DELETE_FOLLOWING: {
            return Object.assign({}, state, {
                following: state.following.filter(id => id !== action.payload)
            });
        }
        case UserActions.DELETE_ALL_FOLLOWING: {
            return Object.assign({}, state, {
                following: []
            });
        }
        case UserActions.LOAD_FOLLOWED: {
            return Object.assign({}, state, {
                followed: action.payload
            });
        }
        case UserActions.ADD_FOLLOWED: {
            return Object.assign({}, state, {
                followed: state.following.concat(action.payload)
            });
        }
        case UserActions.DELETE_FOLLOWED: {
            return Object.assign({}, state, {
                followed: state.following.filter(id => id !== action.payload)
            });
        }
        case UserActions.DELETE_ALL_FOLLOWED: {
            return Object.assign({}, state, {
                followed: []
            });
        }
        default: { return state; }
    }
}
