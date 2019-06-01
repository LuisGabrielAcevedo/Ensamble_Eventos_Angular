import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IUsuario } from '../../../../../models/usuario';
import {
  LocalStorageService,
  UsersService,
  MensajeService,
  RegisterService, SubirArchivosService
} from '../../../../../services/index.service';
import { UserSandbox } from '../../../../../sandBox/user.sandBox';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IMensaje } from '../../../../../models/mensaje';
import { IArtistInformation } from '../../../../../models/informacionArtista';
import { Global } from '../../../../../services/http/url.service';


// funcion creada para forzar el llamado desde angular del /js/custom.js
declare function init_plugins();
declare function init_cropper();

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html'
})
export class EditUserComponent implements OnInit, OnDestroy {
  user: IUsuario = null;
  subscriptions: Subscription[] = [];
  forma: FormGroup;
  datos1: IArtistInformation;
  datos2: IUsuario;
  imagenPerfilTemporal: string = null;
  imagenPortadaTemporal: string = null;
  filesToUploadPerfil: Array<File>;
  filesToUploadPortada: Array<File>;
  url: string;
  constructor(
    private regiterService: RegisterService,
    private router: Router,
    private userService: UsersService,
    public localStorageService: LocalStorageService,
    private userSandBox: UserSandbox,
    private mensajeService: MensajeService,
    private uploadService: SubirArchivosService
  ) {
    this.url = Global.url_api;
  }

  ngOnInit() {
    init_plugins();
    init_cropper();
    this.subscriptions.push(
      this.userSandBox.fetchIdentity()
        .subscribe(identity => {
          this.user = identity;
          this.datos2 = this.user;
         
        }),
      this.userSandBox.fetchArtistInformation()
        .subscribe(info => {
          this.datos1 = info;
          console.log(this.datos1)
        })
    );

    this.forma = new FormGroup({
      nombre: new FormControl(this.user.nombre),
      apellido: new FormControl(this.user.apellido),
      usuario: new FormControl(this.user.nombreUsuario),
      email: new FormControl(this.user.email),
      imagen: new FormControl(this.user.imagen),
      facebook: new FormControl(this.datos1 ? this.datos1.facebook : null),
      instagram: new FormControl(this.datos1 ? this.datos1.instagram : null),
      youtube: new FormControl(this.datos1 ? this.datos1.youtube : null),
      web: new FormControl(this.datos1 ? this.datos1.web : null),
      descripcion: new FormControl(this.datos1 ? this.datos1.descripcion : null),
      detalles: new FormControl(this.datos1 ? this.datos1.detalles : null),
    });

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  guardar() {
    if (this.datos2) {
      this.datos2.nombre = this.forma.value.nombre;
      this.datos2.apellido = this.forma.value.apellido;
      this.datos2.email = this.forma.value.email;
      this.datos2.nombreUsuario = this.forma.value.usuario;
    }
    if (this.datos1) {
      this.datos1.facebook = this.forma.value.facebook;
      this.datos1.youtube = this.forma.value.youtube;
      this.datos1.instagram = this.forma.value.instagram;
      this.datos1.web = this.forma.value.web;
      this.datos1.descripcion = this.forma.value.descripcion;
      this.datos1.detalles = this.forma.value.detalles;
    }

    if (this.user.rol === 'Usuario' || this.user.rol === 'Admin') {
      this.userService.editarUsuario(this.datos2, this.user._id).subscribe(
        resp => {
          if (resp.estadoRespuesta === 'OK') {
            this.localStorageService.guardarIdentity(resp.usuario);
            this.userSandBox.loadUser(resp.usuario);
            this.sendMensaje(resp.estadoRespuesta, resp.msg);
          }
        },
        error => {
          if (error !== null) {
            const respError = JSON.parse(error._body);
            this.sendMensaje(respError.estadoRespuesta, respError.msg);
          }
        }
      );
    } else if (this.user.rol === 'Artista') {
      this.userService.forkJoinEditUserComponent(this.datos1, this.datos2).subscribe(
        resp => {
          if (resp[1].estadoRespuesta === 'OK' && resp[1].estadoRespuesta === 'OK') {
            this.localStorageService.guardarIdentity(resp[0].usuario);
            this.userSandBox.loadUser(resp[0].usuario);
            this.localStorageService.guardarArtistInformation(resp[1].informacionArtista);
            this.userSandBox.loadArtistInformation(resp[1].informacionArtista);
            this.sendMensaje(resp[1].estadoRespuesta, resp[1].msg);
          }
        },
        error => {
          if (error !== null) {
            const respError = JSON.parse(error._body);
            this.sendMensaje(respError.estadoRespuesta, respError.msg);
          }
        }
      );
    } else {
      this.userService.editarInformacionArtista(this.datos1, this.datos2._id).subscribe(
        resp => {
          this.localStorageService.guardarArtistInformation(resp.informacionArtista);
          this.userSandBox.loadArtistInformation(resp.informacionArtista);
          this.sendMensaje(resp.estadoRespuesta, resp.msg);
        },
        error => {
          if (error !== null) {
            const respError = JSON.parse(error._body);
            this.sendMensaje(respError.estadoRespuesta, respError.msg);
          }
        }
      );
    }
  }

  fileChangeEventPerfil(imagen) {
    if (!imagen) {
      this.imagenPerfilTemporal = null;
      return;
    }
    this.filesToUploadPerfil = <Array<File>>imagen.target.files;
    // despues validamos que solo imagen, por ahora ya lo tiene el backend
    const reader = new FileReader();
    const urlTemporalPerfil = reader.readAsDataURL(this.filesToUploadPerfil[0]);
    reader.onloadend = () => {
      this.imagenPerfilTemporal = reader.result;
    };
  }

  actualizarFotoPerfil() {
    this.uploadService.SubirArchivo(`${this.url}uploadImage/${this.user._id}`, [], this.filesToUploadPerfil, null, 'archivo').then(
      resp => {
        if (resp.estadoRespuesta === 'OK') {
          this.imagenPerfilTemporal = null;
          this.localStorageService.guardarIdentity(resp.usuario);
          this.userSandBox.loadUser(resp.usuario);
        } else {
        }
        this.sendMensaje(resp.estadoRespuesta, resp.msg);
      },
      error => {
        if (error != null) {
          const respError = JSON.parse(error._body);
          this.sendMensaje(respError.estadoRespuesta, respError.msg);
        }
      }
    );
  }

  fileChangeEventPortada(imagen) {
    if (!imagen) {
      this.imagenPortadaTemporal = null;
      return;
    }
    this.filesToUploadPortada = <Array<File>>imagen.target.files;
    // despues validamos que solo imagen, por ahora ya lo tiene el backend
    const reader = new FileReader();
    const urlTemporalPerfil = reader.readAsDataURL(this.filesToUploadPortada[0]);
    reader.onloadend = () => {
      this.imagenPortadaTemporal = reader.result;
    };
  }

  actualizarFotoPortada() {
    this.uploadService.SubirArchivo(`${this.url}uploadImagePortada/${this.user._id}`, [], this.filesToUploadPortada, null, 'archivo').then(
      resp => {
        if (resp.estadoRespuesta === 'OK') {
          this.imagenPerfilTemporal = null;
          this.localStorageService.guardarIdentity(resp.usuario);
          this.userSandBox.loadUser(resp.usuario);
        } else {
        }
        this.sendMensaje(resp.estadoRespuesta, resp.msg);
      },
      error => {
        if (error != null) {
          const respError = JSON.parse(error._body);
          this.sendMensaje(respError.estadoRespuesta, respError.msg);
        }
      }
    );
  }

  editarfotos() {

  }
  // Funcion para enviar mensajes
  sendMensaje(type, text) {
    const datos: IMensaje = { type: type, text: text, autoClose: { state: true, time: 3700 } };
    this.mensajeService.mensaje1(datos);
  }
}
