import { Action } from '@ngrx/store';
import { IDataBaseSearchCollection, IDataBaseSearchIdCollection, dataCollectionRequest, dataIdCollectionRequest } from '../../models/baseDeDatos';

export const CHANGE_TYPE = '[Data Base] Change Type';
export const CHANGE_ITEMSPERPAGE = '[Data Base] Change Items Per Page';
export const CHANGE_PAGE = '[Data Base] Change Page';
export const LOAD_DATACOLLECTION = '[Data Base] Load Data Collection';
export const LOAD_DATACOLLECTION_SUCCESS = '[Data Base] Load Data Collection Success';
export const LOAD_DATACOLLECTION_ERROR = '[Data Base] Load Data Collection Error';
export const LOAD_DATAIDCOLLECTION = '[Data Base] Load Data Id Collection';
export const LOAD_DATAIDCOLLECTION_SUCCESS = '[Data Base] Load Data Id Collection Success';
export const LOAD_DATAIDCOLLECTION_ERROR = '[Data Base] Load Data Id Collection Error';
export const REMOVE_DATACOLLECTION = '[Data Base] Remove Data Collection';
export const REMOVE_DATAIDCOLLECTION = '[Data Base] Remove Data Id Collection';

export class ChangeTypeAction implements Action {
    readonly type = CHANGE_TYPE;
    constructor(public payload : string) {
    }
}

export class ChangePageAction implements Action {
    readonly type = CHANGE_PAGE;
    constructor(public payload : number) {
    }
}

export class ChangeItemsPerPageAction implements Action {
    readonly type = CHANGE_ITEMSPERPAGE;
    constructor(public payload : string) {
    }
}

export class LoadDataCollectionAction implements Action {
    readonly type = LOAD_DATACOLLECTION;
    constructor(public payload : dataCollectionRequest) {
    }
}

export class LoadDataCollectionSuccessAction implements Action {
    readonly type = LOAD_DATACOLLECTION_SUCCESS;
    constructor(public payload : IDataBaseSearchCollection) {
    }
}

export class LoadDataCollectionErrorAction implements Action {
    readonly type = LOAD_DATACOLLECTION_ERROR;
    constructor(public payload : any) {
    }
}

export class LoadDataIdCollectionAction implements Action {
    readonly type = LOAD_DATAIDCOLLECTION;
    constructor(public payload:dataIdCollectionRequest) {
    }
}

export class LoadDataIdCollectionSuccessAction implements Action {
    readonly type = LOAD_DATAIDCOLLECTION_SUCCESS;
    constructor(public payload : IDataBaseSearchIdCollection) {
    }
}

export class LoadDataIdCollectionErrorAction implements Action {
    readonly type = LOAD_DATAIDCOLLECTION_ERROR;
    constructor(public payload : any) {
    }
}

export class RemoveDataCollectionAction implements Action {
    readonly type = REMOVE_DATACOLLECTION;
    constructor(public payload: string) {
    }
}

export class RemoveDataIdCollectionAction implements Action {
    readonly type = REMOVE_DATAIDCOLLECTION;
    constructor(public payload:dataIdCollectionRequest) {
    }
}


export type Actions
    = ChangeTypeAction
    | ChangeItemsPerPageAction
    | ChangePageAction
    | LoadDataCollectionAction
    | LoadDataCollectionSuccessAction
    | LoadDataCollectionErrorAction
    | LoadDataIdCollectionAction
    | LoadDataIdCollectionSuccessAction
    | LoadDataIdCollectionErrorAction
    | RemoveDataCollectionAction
    | RemoveDataIdCollectionAction
