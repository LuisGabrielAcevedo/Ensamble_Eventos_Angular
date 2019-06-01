import { Component, OnInit } from '@angular/core';
import { IPublicacionPerfil } from '../../../../models/publicacion';
import { IUsuario } from '../../../../models/usuario';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  publications: IPublicacionPerfil[];
  artist: IUsuario;
  url;
  constructor() { }

  ngOnInit() {
  }

}
