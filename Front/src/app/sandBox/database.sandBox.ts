import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as DataBaseactions from '../store/dataBase/dataBase.action';
import * as fromRoot from '../store';
import { Sandbox } from './index';
import { IDataBaseSearchCollection, IDataBaseSearchIdCollection, dataCollectionRequest, dataIdCollectionRequest } from '../models/baseDeDatos';

@Injectable()

export class DataBaseSandbox extends Sandbox {

    constructor(protected store: Store<fromRoot.State>) {
        super(store);
    }
    fetchIsLoagind(): Observable<any> {
        return this.store.select(fromRoot.getIsLoading);
    }

    fetchIsLoagindId(): Observable<any> {
        return this.store.select(fromRoot.getIsLoadingId);
    }

    fetchType(): Observable<string> {
        return this.store.select(fromRoot.getType);
    }

    fetchItemsPerPage(): Observable<string> {
        return this.store.select(fromRoot.getItemsPerPage);
    }

    fetchPage(): Observable<number> {
        return this.store.select(fromRoot.getPage);
    }

    fetchDataCollection(): Observable<IDataBaseSearchCollection> {
        return this.store.select(fromRoot.getDataCollection);
    }

    fetchDataIdCollection(): Observable<IDataBaseSearchIdCollection> {
        return this.store.select(fromRoot.getDataIdCollection);
    }

    changeType(tipo: string): void {
        return this.store.dispatch(new DataBaseactions.ChangeTypeAction(tipo));
    }

    changePage(page: number): void {
        return this.store.dispatch(new DataBaseactions.ChangePageAction(page));
    }

    changeItemsPerPage(numero: string): void {
        return this.store.dispatch(new DataBaseactions.ChangeItemsPerPageAction(numero));
    }

    loadDataCollection(data: dataCollectionRequest): void {
        return this.store.dispatch(new DataBaseactions.LoadDataCollectionAction(data));
    }

    loadIdDatacollection(data: dataIdCollectionRequest): void {
        return this.store.dispatch(new DataBaseactions.LoadDataIdCollectionAction(data));
    }

    removeIdDatacollection(data: dataIdCollectionRequest): void {
        return this.store.dispatch(new DataBaseactions.RemoveDataIdCollectionAction(data));
    }

    removeDataCollection(data: string): void {
        return this.store.dispatch(new DataBaseactions.RemoveDataCollectionAction(data))
    }
}
