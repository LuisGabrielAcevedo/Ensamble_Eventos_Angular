import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../../../../services/index.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  colorMensaje: string;
  constructor(
    public mensajeService: MensajeService
  ) { }

  ngOnInit() {
  }

  color() {
    if (this.mensajeService.tipoMensaje === 'OK') {
      return { 'background': '#cce5ff', 'color': '#004085' };
    } else if (this.mensajeService.tipoMensaje === 'WARNING') {
      return { 'background': '#fcf8e3', 'color': '#c09853' };
    } else if (this.mensajeService.tipoMensaje === 'ERROR') {
      return { 'background': '#f8d7da', 'color': '#721c24' };
    }
  }
}
