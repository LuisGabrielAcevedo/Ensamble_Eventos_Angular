import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IArtistNombre } from '../../../../../models/artista';
import { IUsuario } from '../../../../../models/usuario';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { LoadingService, UsersService } from '../../../../../services/index.service';



@Component({
  selector: 'app-searchmusicsheet',
  templateUrl: './searchmusicsheet.component.html'
})

export class SearchMusicSheetComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  artistName: IArtistNombre;
  id_ruta: string;
  artist: IUsuario;
  listSheetforArtist: string[];
  lista: string[];
  buscarTexto: string[];

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private _router: Router,
    private _artistSandbox: ArtistSandbox,
    private _userService: UsersService,


  ) { this.listSheetforArtist = []; }


  ngOnInit() {
    // this._route.params.forEach((params: Params) => {
    //   const valueInput = params['value'];
    //   if (valueInput !== 'value') {
    //     const inputNombre = (document.getElementById('inputPartitura') as HTMLOptionElement);
    //     inputNombre.value = valueInput;
    //     this.buscar(valueInput);
    //   }
    // });

    // Buscar lista de partituras del Artista
    this._userService.getSheetArtistMock('').subscribe(
      resp => {
        this.listSheetforArtist = resp;
        this.lista = this.listSheetforArtist;
      },
      error => { console.log(error); });



    this._route.params.forEach((params: Params) => {
      const valueInput = params['value'];
      this.artistName = { _nombre: valueInput };

        this.buscarTexto = valueInput;

       console.log(this.artistName);
      // if (valueInput !== 'value') {
      //   const inputNombre = (document.getElementById('inputPartitura') as HTMLOptionElement);
      //   inputNombre.value = valueInput;
      //   // inputNombre.value = this.buscarTexto;
      //   this.buscar(valueInput);
      //   console.warn(valueInput );
     // }

    });

  } // FIN ngOnInit

   enviarnombre (NombredelPdf) {
    const elem = document.getElementById('nombrePdf');
    const namepdf = NombredelPdf;
    console.log(elem);
    console.log(namepdf);
    console.log(NombredelPdf);
 }

  buscar(value) {
    // console.log(value);


  // aqui buscar las partituras y actualizar la tabla
  }



  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
