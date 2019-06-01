import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { IMensaje } from '../../models/mensaje';
import { delay } from 'rxjs/operators';

@Injectable()
export class MensajeService {
    datos: IMensaje;
    public stateMensaje: string;
    public tipoMensaje: string = null;
    public textoMensaje: string = null;
    public tipoEstilo: string = null;
    constructor() {
        this.stateMensaje = 'cerrar';
    }
    mensaje1(datos: IMensaje) {
        this.stateMensaje = 'abrir';
        this.tipoMensaje = datos.type;
        this.textoMensaje = datos.text;
        this.tipoEstilo = 'mensajeModal1';
        if (datos.autoClose.state === true) {
            setTimeout(() => { this.cerrarMensajeAutomatico(); }, datos.autoClose.time);
        }
    }

    mensaje2(datos: IMensaje) {
        this.stateMensaje = 'abrir';
        this.tipoMensaje = datos.type;
        this.textoMensaje = datos.text;
        this.tipoEstilo = 'mensajeModal2';
        if (datos.autoClose.state === true) {
            setTimeout(() => { this.cerrarMensajeAutomatico(); }, datos.autoClose.time);
        }
    }

    cerrarMensajeAutomatico() {
        this.stateMensaje = 'cerrar';
    }

    cerrar() {
        this.stateMensaje = 'cerrar';
    }
}
