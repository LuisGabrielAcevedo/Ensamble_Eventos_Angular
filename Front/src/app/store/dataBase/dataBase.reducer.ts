import * as dataBaseActions from './dataBase.action'
import { IDataBaseSearchCollection, IDataBaseSearchIdCollection } from '../../models/baseDeDatos';

export interface DataBaseState {
    parametroTipo: string;
    parametroItemsPorPagina: string;
    parametroPaginaActual: number;
    dataBaseCollection: IDataBaseSearchCollection;
    dataBaseIdCollection: IDataBaseSearchIdCollection;
    isLoading: boolean;
    isLoadingId: boolean;
    error?: boolean;
}

export const initialState: DataBaseState = {
    parametroTipo: '',
    parametroItemsPorPagina: '',
    parametroPaginaActual: 1,
    dataBaseCollection: null,
    dataBaseIdCollection: null,
    isLoadingId: null,
    isLoading: null,
    error: null
};

export const getType = (state: DataBaseState) => state.parametroTipo;
export const getItemsPerPage = (state: DataBaseState) => state.parametroItemsPorPagina;
export const getPage = (state: DataBaseState) => state.parametroPaginaActual;
export const getDataCollection = (state: DataBaseState) => state.dataBaseCollection;
export const getDataIdCollection = (state: DataBaseState) => state.dataBaseIdCollection;
export const getIsLoading = (state: DataBaseState) => state.isLoading;
export const getIsLoadingId = (state: DataBaseState) => state.isLoadingId;



export function DataBaseReducer(state = initialState, action: dataBaseActions.Actions) {
    switch (action.type) {
        case dataBaseActions.CHANGE_TYPE: {
            return Object.assign({}, state, {
                parametroTipo: action.payload
            });
        }
        case dataBaseActions.CHANGE_ITEMSPERPAGE: {
            return Object.assign({}, state, {
                parametroItemsPorPagina: action.payload
            });
        }
        case dataBaseActions.CHANGE_PAGE: {
            return Object.assign({}, state, {
                parametroPaginaActual: action.payload
            });
        }
        case dataBaseActions.LOAD_DATACOLLECTION: {
            return Object.assign({}, state, {
                isLoading: true,
                error: null
            });
        }
        case dataBaseActions.LOAD_DATACOLLECTION_SUCCESS: {
            return Object.assign({}, state, {
                dataBaseCollection: action.payload,
                isLoading: null,
                error: null
            });
        }
        case dataBaseActions.LOAD_DATACOLLECTION_ERROR: {
            return Object.assign({}, state, {
                isLoading: null,
                error: true
            });
        }
        case dataBaseActions.LOAD_DATAIDCOLLECTION: {
            return Object.assign({}, state, {
                isLoadingId: true,
                error: null
            });
        }
        case dataBaseActions.LOAD_DATAIDCOLLECTION_SUCCESS: {
            return Object.assign({}, state, {
                dataBaseIdCollection: action.payload,
                isLoadingId: null,
                error: null
            });
        }
        case dataBaseActions.LOAD_DATAIDCOLLECTION_ERROR: {
            return Object.assign({}, state, {
                isLoadingId: null,
                error: true
            });
        }
        case dataBaseActions.REMOVE_DATACOLLECTION: {
            return Object.assign({}, state, {
                isLoading: true,
                error: null
            });
        }
        case dataBaseActions.REMOVE_DATAIDCOLLECTION: {
            return Object.assign({}, state, {
                isLoadingId: true,
                error: null
            });
        }
        default: { return state; }
    }
}