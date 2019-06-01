import { Component, OnInit, Input} from '@angular/core';
import { Global } from '../../../../services/http/url.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @Input() listaAlbums;
  @Input() tipo;
  @Input() artistId;
  url;
  constructor() {
    this.url = Global.url_api;
   }

  ngOnInit() {
  }

}
