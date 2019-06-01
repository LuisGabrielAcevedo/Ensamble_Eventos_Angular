import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';



//funcion creada para forzar el llamado desde angular del /js/custom.js
declare function init_plugins();

@Component({
  selector: 'app-preregister',
  templateUrl: './preregister.component.html',
  styleUrls: ['./preregister.component.css']
})
export class PreregisterComponent implements OnInit {

  forma: FormGroup;
  
  constructor(

    private _router: Router,
  ) {

    this.forma = new FormGroup({
    rol: new FormControl(null)
    })
  }

  ngOnInit() {
    //llamamos esta funcion para obligar a cargar todo y que funcione bien
    init_plugins();
    this.forma.valueChanges
    .subscribe(newValue => {
    })


  }

  Continuar(){
    this._router.navigate([`/users/register/${this.forma.value.rol}`]);
  }

}



