import { Action } from '@ngrx/store';
import { IUsuario } from '../../models/usuario';
import { IArtistInformation } from '../../models/informacionArtista';

export const LOAD_USER = '[User] Load User';
export const DELETE_USER = '[User] Delete User';
export const LOAD_TOKEN = '[User] Load Token';
export const DELETE_TOKEN = '[User] Delete Token';
export const LOAD_FOLLOWING = '[User] Load Following';
export const ADD_FOLLOWING = '[User] Add Following';
export const DELETE_FOLLOWING = '[User] Delete Following';
export const DELETE_ALL_FOLLOWING = '[User] Delete All Following';
export const LOAD_FOLLOWED = '[User] Load Followed';
export const ADD_FOLLOWED = '[User] Add Followed';
export const DELETE_FOLLOWED = '[User] Delete Followed';
export const DELETE_ALL_FOLLOWED = '[User] Delete All Followed';
export const LOAD_ARTIST_INFORMATION = '[USER] Load Artist Information';
export const DELETE_ARTIST_INFORMATION = '[USER] Delete Artist Information';
export const LOAD_SOCKET_ID = '[USER] Load Socket Id';
export const DELETE_SOCKET_ID = '[USER] Delete Socket Id';

export class LoadSocketIdAction implements Action {
    readonly type = LOAD_SOCKET_ID;
    constructor(public payload: string) {
    }
}

export class DeleteSocketIdAction implements Action {
    readonly type = DELETE_SOCKET_ID;
    constructor(public payload: null) {
    }
}

export class LoadUserAction implements Action {
    readonly type = LOAD_USER;
    constructor(public payload: IUsuario) {
    }
}
export class DeteleUserAction implements Action {
    readonly type = DELETE_USER;
    constructor(public payload: null) {
    }
}

export class LoadTokenAction implements Action {
    readonly type = LOAD_TOKEN;
    constructor(public payload: string) {
    }
}
export class DeleteTokenAction implements Action {
    readonly type = DELETE_TOKEN;
    constructor(public payload: null) {
    }
}

export class LoadFollowingAction implements Action {
    readonly type = LOAD_FOLLOWING;
    constructor(public payload: string[]) {
    }
}
export class AddFollowingAction implements Action {
    readonly type = ADD_FOLLOWING;
    constructor(public payload: string) {
    }
}

export class DeleteFollowingAction implements Action {
    readonly type = DELETE_FOLLOWING;
    constructor(public payload: string) {
    }
}

export class DeleteAllFollowingAction implements Action {
    readonly type = DELETE_ALL_FOLLOWING;
    constructor() {
    }
}
export class LoadFollowedAction implements Action {
    readonly type = LOAD_FOLLOWED;
    constructor(public payload: string[]) {
    }
}
export class AddFollowedAction implements Action {
    readonly type = ADD_FOLLOWED;
    constructor(public payload: string) {
    }
}

export class DeleteFollowedAction implements Action {
    readonly type = DELETE_FOLLOWED;
    constructor(public payload: string) {
    }
}

export class DeleteAllFollowedAction implements Action {
    readonly type = DELETE_ALL_FOLLOWED;
    constructor() {
    }
}

export class DeleteArtistInformationAction implements Action {
    readonly type = DELETE_ARTIST_INFORMATION;
    constructor(public payload: string) {
    }
}

export class LoadArtistInformationAction implements Action {
    readonly type = LOAD_ARTIST_INFORMATION;
    constructor(public payload: IArtistInformation) {
    }
}

export type Actions
    = LoadUserAction
    | LoadSocketIdAction
    | DeleteSocketIdAction
    | DeteleUserAction
    | LoadFollowingAction
    | AddFollowingAction
    | DeleteFollowingAction
    | DeleteAllFollowingAction
    | LoadFollowedAction
    | AddFollowedAction
    | DeleteFollowedAction
    | DeleteAllFollowedAction
    | LoadArtistInformationAction
    | LoadTokenAction
    | DeleteTokenAction
    | DeleteArtistInformationAction;

