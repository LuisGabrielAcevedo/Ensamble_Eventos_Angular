import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUserRegisterRequest } from '../../../models/usuario';
import { UsersService } from '../../../services/http/users.service';
import { IMensaje } from '../../../models/mensaje';
import { MensajeService, RegisterService } from '../../../services/index.service';
// Funcion creada para forzar el llamado desde angular del /js/custom.js
declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  forma: FormGroup;
  user: IUserRegisterRequest;
  rolActual: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsersService,
    private mensajeService: MensajeService,
    private registerService: RegisterService
  ) { }

  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;
      if (pass1 === pass2) {
        return null;
      }
      return {
        sonIguales: true
      };
    };

  }

  ngOnInit() {
    init_plugins();
    // Leemos el rol la ruta
    this._route.params.forEach((params: Params) => {
      const tipo = params['tipo'];
      this.rolActual = tipo;
    });
    // Inicializamos el formulario
    this.forma = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      rol: new FormControl(this.rolActual, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password2') });
  }

  registrarUsuario() {
    // 1. Verificar si las condiciones son seleccionadas
    if (!this.forma.value.condiciones) {
      this.sendMensaje('WARNING', '¡Es necesario aceptar las condiciones!');
    } else {
      // 2. Llenamos el formulario
      this.user = {
        nombre: null,
        apellido: null,
        nombreUsuario: this.forma.value.usuario,
        email: this.forma.value.correo,
        clave: this.forma.value.password,
        rol: this.forma.value.rol
      };
      this._userService.registrarUsuario(this.user).subscribe(
        resp => {
          if (resp.estadoRespuesta === 'WARNING') {
            this.sendMensaje(resp.estadoRespuesta, resp.msg);
          } else {
            if (resp.usuario.rol === 'Admin' || resp.usuario.rol === 'Usuario') {
              this.sendMensaje(resp.estadoRespuesta, resp.msg);
              this._router.navigate([`/home`]);
            } else {
              this.registerService.guardarDatos(resp.usuario.id, resp.usuario.rol);
              this.sendMensaje('OK', 'Artista creado con exito, le recomendamos completar la siguiente informacion para su perfil');
              this._router.navigate([`/users/infoartista`]);
            }
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
  }
  // Funcion para enviar mensajes
  sendMensaje(type, text) {
    // Mensaje
    const datos: IMensaje = { type: type, text: text, autoClose: { state: true, time: 4000 } };
    this.mensajeService.mensaje1(datos);
    //
  }
}
