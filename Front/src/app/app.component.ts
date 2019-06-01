import { Component, OnInit } from '@angular/core';
import { LocalStorageService, MensajeService } from './services/index.service';
declare function init_plugins();
declare function init_cropper();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private localStorageService: LocalStorageService,
    public mensajeService: MensajeService
  ) {

  }
  ngOnInit() {
    init_plugins();
    init_cropper();
    this.localStorageService.obtenerDatosLocalStorage();
  }
}
