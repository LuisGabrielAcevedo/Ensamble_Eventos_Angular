import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RegisterService, UsersService, MensajeService } from '../../../services/index.service';
import { IArtistInformationRequest1, IArtistInformationRequest2 } from '../../../models/informacionArtista';
import { IMensaje } from '../../../models/mensaje';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-infoartista',
  templateUrl: './infoartista.component.html',
  styleUrls: ['./infoartista.component.css']
})
export class InfoartistaComponent implements OnInit, OnDestroy {
  datos1: IArtistInformationRequest1;
  datos2: IArtistInformationRequest2;
  forma: FormGroup;
  mostrarDatos: boolean;
  constructor(
    private regiterService: RegisterService,
    private userService: UsersService,
    private mensajeService: MensajeService,
    private _route: ActivatedRoute,
    private _router: Router,

  ) { }

  ngOnInit() {

    if (this.regiterService.ROL !== 'Artista') { this.mostrarDatos = false; }
    if (this.regiterService.ROL === 'Artista') { this.mostrarDatos = true; }
    // Inicializamos el formulario
    this.forma = new FormGroup({
      nombre: new FormControl(null),
      apellido: new FormControl(null),
      nom_artista: new FormControl(null),
      facebook: new FormControl(null),
      instagram: new FormControl(null),
      youtube: new FormControl(null),
      web: new FormControl(null),
      descripcion: new FormControl(null),
      detalles: new FormControl(null),
    });
  }

  guardar() {
    // Llenar estos datos con el formulario
    this.datos1 = {
      artista: this.regiterService.ID,
      rol: this.regiterService.ROL,
      facebook: this.forma.value.facebook,
      instagram: this.forma.value.instagram,
      youtube: this.forma.value.youtube,
      web: this.forma.value.web,
      descripcion: this.forma.value.descripcion,
      detalles: this.forma.value.detalles,
    };
    // Si es un artista
    if (this.regiterService.ROL === 'Artista') {
      this.datos2 = {
        nombre: this.forma.value.nombre,
        apellido: this.forma.value.apellido,
      };
      this.userService.forkJoinSaveArtistInformationComponent(this.datos1, this.datos2).subscribe(
        resp => {
          if (resp[0].estadoRespuesta === 'OK' || resp[1].estadoRespuesta === 'OK') {
            this.sendMensaje(resp[0].estadoRespuesta, resp[0].msg);
            this._router.navigate([`/home`]);
          }
        },
        error => {
          if (error != null) {
            const respError = JSON.parse(error._body);
            this.sendMensaje(respError.estadoRespuesta, respError.msg);
          }
        }
      );
      // Si es una banda o duo
    } else {
      this.guardarInfo();
    }
  }

  guardarInfo() {
    this.userService.guardarDatosDelArtista(this.datos1).subscribe(
      resp => {
        if (resp.estadoRespuesta === 'OK') {
          this.sendMensaje(resp.estadoRespuesta, resp.msg);
          this._router.navigate([`/home`]);
        }
      },
      error => {
        if (error != null) {
          const respError = JSON.parse(error._body);
          this.sendMensaje(respError.estadoRespuesta, respError.msg);
        }
      }
    );
  }

  sendMensaje(type, text) {
    // Mensaje
    const datos: IMensaje = { type: type, text: text, autoClose: { state: true, time: 4000 } };
    this.mensajeService.mensaje1(datos);
    //
  }

  ngOnDestroy() {
    this.regiterService.borrarDatos();
  }

}
