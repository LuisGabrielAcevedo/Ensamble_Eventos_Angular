import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tarjeta1;
  public tarjeta2;
  public tarjeta3;
  public styleType;
  constructor() {
    this.styleType='info';
    this.tarjeta1 = {
      titulo: '¡Que esperas para registrarte!',
      subtitulo: '',
      texto: 'Contacta los mejores artista nacionales',
      botonTexto: 'Sign in',
      link:'/users/preregister'
    }
    this.tarjeta2={
      titulo: '¿Quieres mejorar tu oido musical?',
      subtitulo: '¡Usa MusicStudio!',
      texto: 'Una aplicación hecha para vos',
      botonTexto: 'Go to MusicStudio',
      link:'/'
    }
    this.tarjeta3={
      titulo: 'Ultimas noticias',
      subtitulo: '',
      texto: 'Enterate de los próximos recitales en argentina, movimientos de los artistas del momento y muchas cosas mas',
      botonTexto: 'Ultimas noticias',
      link:'/'
    }
  }

  ngOnInit() {

  }

}