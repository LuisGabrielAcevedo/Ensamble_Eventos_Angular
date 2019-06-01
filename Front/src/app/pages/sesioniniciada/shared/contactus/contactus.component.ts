import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IMensajeCarousel } from '../../../../models/mensaje';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  forma: FormGroup;
  message:IMensajeCarousel;
  constructor() { }

  ngOnInit() 
  {
// Inicializamos el formulario
this.forma = new FormGroup({
  nombre: new FormControl(null, Validators.required),
  correo: new FormControl(null, [Validators.required, Validators.email]),
  mensaje: new FormControl(null, Validators.required)
});
   
  }


  enviar () {
    this.message = {
      nombre: this.forma.value.nombre,
      correo: this.forma.value.correo,
      mensaje: this.forma.value.mensaje,
    };
  console.log(this.message)
  
  }



}
