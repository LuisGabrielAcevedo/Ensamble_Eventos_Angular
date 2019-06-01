import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
    public ID:string;
    public ROL: string;
    constructor() {
    }
    guardarDatos(id:string, rol:string){
        this.ID=id;
        this.ROL=rol;
    }
    borrarDatos(){
        this.ID=null;
        this.ROL=null;
    }
}