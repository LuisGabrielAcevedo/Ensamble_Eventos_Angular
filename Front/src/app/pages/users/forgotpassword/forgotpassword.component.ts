import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators  } from '@angular/forms';


declare function init_plugins();

@Component({
  selector: 'app-forgot',
  templateUrl: './forgotpassword.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  forma:FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {

  //llamamos esta funcion para obligar a cargar los plugins todo y que funcione bien
  init_plugins();  
  this.forma = new FormGroup({

    usuario: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
     })


  }

  submit() {

  }

recuperarUsuario(){
  console.log(this.forma.value)
}


}



