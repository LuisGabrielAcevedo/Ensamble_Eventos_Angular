import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class LoadingService {
    public stateModal: string;
    public isLoading: boolean;
    constructor() {
        this.stateModal = 'cerrar';
    }
    open() {
        this.stateModal = 'abrir';
    }
    close() {
        setTimeout(() => { this.extra(); }, 100);
    }
    extra() {
        this.stateModal = 'cerrar';
    }
    startLoading() {
        this.isLoading = true;
    }
    stopLoading() {
        this.isLoading = false;
    }
}
