import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService, MensajeService, LocalStorageService, ChatService, LoadingService } from '../../../services/index.service';
import { IUserLoginRequest, IUsuario } from '../../../models/usuario';
import { IMensaje } from '../../../models/mensaje';
import { UserSandbox } from '../../../sandBox/user.sandBox';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  recuerdame: boolean;
  forma: FormGroup;
  userData: IUserLoginRequest;
  auth2: any;
  constructor(
    private router: Router,
    private _userService: UsersService,
    private _route: ActivatedRoute,
    private mensajeService: MensajeService,
    private userSandBox: UserSandbox,
    private localStorageService: LocalStorageService,
    public chatService: ChatService,
    private _loadingService: LoadingService
  ) {
    this.recuerdame = false;
    this.forma = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      clave: new FormControl(null, Validators.required),
      recuerdame: new FormControl(false)
    });
  }

  ngOnInit() {
    init_plugins();
    this.googleInit();
    // Control recuerdame en el formulario al iniciar el componente
    const userStorage = JSON.parse(localStorage.getItem('userDataEnsamble'));
    if (!userStorage) {
      this.forma.setValue({
        email: '',
        clave: '',
        recuerdame: false
      });
    } else {
      this.forma.setValue({
        email: userStorage.email,
        clave: userStorage.clave,
        recuerdame: true
      });
    }
  }

  // Funcion para la conexion con google
  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '42298975952-mkvc45k5rcqqhge51ugd5se0smostjn8.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }

  // Funcion para loguedo con google
  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      // let profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;
      this._userService.loginGoogle(token)
        .subscribe(
          resp => {
            if (resp.estadoRespuesta === 'OK') {
              this.processLogin(resp);
            }
          },
          error => {
            if (error != null) {
              const respError = JSON.parse(error._body);
              this.sendMensaje(respError.estadoRespuesta, respError.msg);
            }
          }
        );
      // redirijimos a HOME
      // this._userService.loginGoogle( token )
      // .subscribe( () => window.location.href = '#/home'  );
    });
  }

  // Funcion para controlar el recuerdame solo funciona cuando me logueo con la aplicacion, no google
  rememberMe() {
    if (this.forma.value.recuerdame === true) {
      localStorage.setItem('userDataEnsamble', JSON.stringify(this.forma.value));
    } else {
      localStorage.removeItem('userDataEnsamble');
    }
  }

  // Funcion para loguearse con la aplicacion
  loginUsuario() {
    this.rememberMe();
    delete this.forma.value['recuerdame'];
    this.userData = this.forma.value;
    this._userService.identificarUsuario(this.userData).subscribe(
      resp => {
        if (resp.estadoRespuesta === 'OK') {
          this.processLogin(resp);
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

  // Funcion para procesar datos de logueo
  processLogin(data) {
    if (data.usuario.cuentaActiva === false) {
      this.sendMensaje('ERROR', 'Usuario bloqueado');
    } else {
      // Guardar en el local storage
      this.saveLG(data);
      // Guadar en el store
      this.userSandBox.loadUser(data.usuario);
      this.userSandBox.loadFollowing(data.lista1);
      this.userSandBox.loadFollowed(data.lista2);
      this.userSandBox.loadToken(data.token);
      // Conectar usuario al chat
      this.conectarUsuario(data.usuario);
      // Procesar la respuesta
      if (data.usuario.rol === 'Admin' || data.usuario.rol === 'Usuario') {
        if (data.usuario.datosCompletos === false) {
          this.router.navigate(['/userinformation/edituser']);
          this.sendMensaje('OK', 'Usuario identificado, completa tus datos personales');
        } else {
          this.router.navigate(['/home']);
          this.sendMensaje(data.estadoRespuesta, data.msg);
        }
      } else {
        this.userSandBox.loadArtistInformation(data.informacionArtista);
        this.localStorageService.guardarArtistInformation(data.informacionArtista);
        this.router.navigate(['/home']);
        this.sendMensaje(data.estadoRespuesta, data.msg);
      }
    }
  }

  // Funcion para enviar mensajes
  sendMensaje(type, text) {
    // Mensaje
    const datos: IMensaje = { type: type, text: text, autoClose: { state: true, time: 4000 } };
    this.mensajeService.mensaje1(datos);
    //
  }

  // Funcion para guardar datos en el Local Storage
  saveLG(data) {
    this.localStorageService.guardarIdentity(data.usuario);
    this.localStorageService.guardarFollowing(data.lista1);
    this.localStorageService.guardarFollowed(data.lista2);
    this.localStorageService.guardarToken(data.token);
  }
  // Funcion para conectar el chat
  conectarUsuario(user: IUsuario) {
    const usuario = {
      id: user._id,
      name: user.nombreUsuario,
      imagen: user.imagen
    };
    this.chatService.emit('connectUser', { usuario });
  }
}
