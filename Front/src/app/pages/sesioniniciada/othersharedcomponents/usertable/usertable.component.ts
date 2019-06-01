import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/index.service';
import { IUsuarioList } from '../../../../models/usuario';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  users: IUsuarioList[];
  constructor(
    private _userService: UsersService
  ) { }

  ngOnInit() {
    this.listarUsuarios();
  }
  listarUsuarios() {
    this._userService.obtenerUsuarios().subscribe(
      resp => {
        if (resp.estadoRespuesta === 'OK') {
          this.users = resp.usuarios;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteUser(id) {
    this._userService.borrarUsuario(id).subscribe(
      resp => {
        this.listarUsuarios();
      }, error => {
        console.log(error);
      }
    );
  }
}
