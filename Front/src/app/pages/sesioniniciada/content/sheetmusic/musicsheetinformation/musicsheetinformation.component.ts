import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { LoadingService, UsersService } from '../../../../../services/index.service';
import { Subscription } from 'rxjs/Subscription';
import { IArtistId } from '../../../../../models/artista';
import { IUsuario } from '../../../../../models/usuario';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-musicsheetinformation',
  templateUrl: './musicsheetinformation.component.html'
})


export class MusicSheetInformationComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  artistId: IArtistId;
  id_ruta: string;
  artist: IUsuario;
  listSheetforArtist: string[];
  rutaPdf: string;
  urlSafe: SafeResourceUrl;

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private _router: Router,
    private _artistSandbox: ArtistSandbox,
    private _userService: UsersService,
    public sanitizer: DomSanitizer

  ) { this.listSheetforArtist = []; }




  ngOnInit() {

    // Borrar datos de artista
    this._artistSandbox.removeArtistData();
    // Buscar lista de partituras del Artista
    this._userService.getSheetArtistMock('').subscribe(
      resp => {
        this.listSheetforArtist = resp;
        console.log(this.listSheetforArtist);
      },
      error => { console.log(error); });


    this._route.params.forEach((params: Params) => {
      const pdf = params['pdf'];
      const ruta1 = 'assets/adminpro/mockPdf/';
      // concactenamos
      this.rutaPdf = ruta1.concat(pdf);
      console.log(this.rutaPdf);
    });

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.rutaPdf);




    // this._route.params.forEach((params: Params) => {
    //   const id = params['id'];
    //   this.artistId = { _id: id };

    //   this.subscriptions.push(
    //     this._artistSandbox.fetchArtist()
    //       .subscribe(artist => {
    //         if (artist === null) {
    //           this._artistSandbox.loadArtist(this.artistId);
    //         } else {
    //           this.artist = artist;
    //         }
    //       })
    //   );
    // });




  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
