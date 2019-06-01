import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService } from '../../../../services/index.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { DataBaseSandbox } from '../../../../sandBox/database.sandBox';
import { IDataBaseSearchCollection, dataCollectionRequest, dataIdCollectionRequest } from '../../../../models/baseDeDatos';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html'
})
export class DatabaseComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = []; // Subscripciones al store
  forma: FormGroup;// Formulario reactivo
  menuTabla: string[]; //Menu de la tabla
  datos: IDataBaseSearchCollection; //Datos de la colleccion
  dataCollection: string[];
  titulo: string; // Titulo
  tipo: string; //Tipo 
  items: string; // items
  idData: string; // Datos del id a mostrar
  mensaje: string; // Mensaje cuando no hay datos 
  page: number;
  totalPaginas: number;
  totalItems: number;
  tipoResponse: string;
  cargando: boolean;
  cargandoId: boolean;
  constructor(
    public _dataBaseService: DataBaseService,
    public _databaseSandBox: DataBaseSandbox
  ) {
    //Inicicializo parámetros
    this.datos = null;
    this.mensaje = null;
    this.titulo = 'Buscador de colecciones';
    this.tipoResponse = null;
    this.totalItems = 0;
    this.totalPaginas = 0;
    this.menuTabla = [];
    this.idData = '';
    this.cargando = null;
    this.cargandoId = null;
  }

  ngOnInit() {
    this.forma = new FormGroup({
      tipo: new FormControl('', Validators.required),
      itemsPerPage: new FormControl('', Validators.required)
    })
    this.subscriptions.push(
      //Subscripcion cargando
      this._databaseSandBox.fetchIsLoagind()
        .subscribe(cargando => {
          this.cargando = cargando
        }),
      //Subscripcion cargandoId
      this._databaseSandBox.fetchIsLoagindId()
        .subscribe(cargandoId => {
          this.cargandoId = cargandoId
        }),
      //Subscripcion de tipo
      this._databaseSandBox.fetchType()
        .subscribe(tipo => {
          this.tipo = tipo
        }),
      //Subscripcion de items
      this._databaseSandBox.fetchItemsPerPage()
        .subscribe(items => {
          this.items = items
        }),
      //Subscripcion de pagina actual
      this._databaseSandBox.fetchPage()
        .subscribe(page => {
          this.page = page
          //console.log(this.page);
        }),
      //Subscripcion colecion 
      this._databaseSandBox.fetchDataCollection()
        .filter(datos => datos !== null)
        .subscribe(datos => {
          this.datos = datos
          if (this.datos.data.length == 0) {
            this.mensaje = `No se han registrado datos en la coleccion ${this.datos.tipo}`
            this.titulo = 'Buscador de colecciones';
            this.tipoResponse = this.datos.tipo;
            this.totalItems = 0;
            this.page = 1;
            this.totalPaginas = 0;
            this.menuTabla = [];
            this.dataCollection = this.datos.data;

          } else {

            this.mensaje = null;
            this.titulo = this.datos.titulo;
            this.tipoResponse = this.datos.tipo;
            this.totalItems = this.datos.items;
            this.page = this.datos.paginaActual;
            this.totalPaginas = this.datos.paginas;
            this.menuTabla = this.datos.menuTabla;
            this.dataCollection = this.datos.data;
          }
        }),
      //Subscripcion id en coleccion
      this._databaseSandBox.fetchDataIdCollection()
        .filter(idData => idData !== null)
        .subscribe(idData => {
          this.idData = JSON.stringify(idData.data, null, 4);;
        })
    );
    this.forma.setValue({
      tipo: this.tipo,
      itemsPerPage: this.items
    })
  }

  buscar() {
    let data: dataCollectionRequest = {
      dataRequest: {
        data: {
          tipo: this.tipo,
          itemsPerPage: this.items
        },
        page: this.page
      }
    }
    this._databaseSandBox.loadDataCollection(data);
  }

  coleccionActual() {
    this._databaseSandBox.changeType(this.forma.value.tipo);
  }

  numeroDeItems() {
    this._databaseSandBox.changeItemsPerPage(this.forma.value.itemsPerPage);
  }

  buscarId(id: string) {
    let data: dataIdCollectionRequest = {
      id: id,
      tipo: this.tipo
    }
    this._databaseSandBox.loadIdDatacollection(data);
  }

  delete(id: string) {
    let data: dataIdCollectionRequest = {
      id: id,
      tipo: this.tipo
    }
    this._databaseSandBox.removeIdDatacollection(data);
  }

  deleteData() {
    this._databaseSandBox.removeDataCollection(this.tipo);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
