import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as fromRoot from '../../store';
import * as DataBaseActions from './dataBase.action';
import { DataBaseService } from '../../services/http/database.service';
import { dataCollectionRequest } from '../../models/baseDeDatos';



@Injectable()
export class DataBaseEffects {

    constructor(
        private actions$: Actions,
        private store$: Store<fromRoot.State>,
        private dataBaseHTTPService: DataBaseService
    ) { }

    @Effect()
    loadCollection$: Observable<Action> = this.actions$
        .ofType(DataBaseActions.LOAD_DATACOLLECTION)
        .map(action => (action as DataBaseActions.LoadDataCollectionAction).payload)
        .pipe(
            switchMap((payload) => {
                return this.dataBaseHTTPService.buscarColeccionInfo(payload).map((response) => {
                    return new DataBaseActions.LoadDataCollectionSuccessAction(response);
                })
            })
        );

    @Effect()
    loadIdCollection$: Observable<Action> = this.actions$
        .ofType(DataBaseActions.LOAD_DATAIDCOLLECTION)
        .map(action => (action as DataBaseActions.LoadDataIdCollectionAction).payload)
        .pipe(
            switchMap((payload) => {
                return this.dataBaseHTTPService.buscarIdCollection(payload).map((response) => {
                    return new DataBaseActions.LoadDataIdCollectionSuccessAction(response);
                })
            })
        );

    @Effect()
    removeCollection$: Observable<Action> = this.actions$
        .ofType(DataBaseActions.REMOVE_DATACOLLECTION)
        .map(action => (action as DataBaseActions.RemoveDataCollectionAction).payload)
        .pipe(
            switchMap((payload) => {
                return this.dataBaseHTTPService.borrarDatosCollection(payload).map((response) => {
                    //Mostar mensaje de colecion borrada correctamente
                    let datos: dataCollectionRequest = {
                        dataRequest: {
                            data: {
                                tipo: payload,
                                itemsPerPage: '0'
                            },
                            page: 1
                        }
                    };
                    return new DataBaseActions.LoadDataCollectionAction(datos);
                })
            })
        );

    @Effect()
    removeIdCollection$: Observable<Action> = this.actions$
        .ofType(DataBaseActions.REMOVE_DATAIDCOLLECTION)
        .map(action => (action as DataBaseActions.RemoveDataIdCollectionAction).payload)
        .pipe(
            switchMap((payload) => {
                return this.dataBaseHTTPService.borrarIdCollection(payload).map((response) => {
                    //Mostar mensaje de colecion borrada correctamente
                    let datos: dataCollectionRequest = {
                        dataRequest: {
                            data: {
                                tipo: payload.tipo,
                                itemsPerPage: '10'
                            },
                            page: 1
                        }
                    };
                    return new DataBaseActions.LoadDataCollectionAction(datos);
                })
            })
        );
}
