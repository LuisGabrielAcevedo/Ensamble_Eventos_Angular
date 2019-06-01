import { ICancion } from './cancion';

export interface ICancionActual {
    _idCancion: string;
    lugarAccionDisparoCancion: string;
    numeroCancion: string;
    nombreCancion: string;
    archivoCancion: string;
    duracionCancion: string;
    precioCancion: string;
    tipoCancion: string;
    registrationDateCancion: string;
    artista: {
        _idArtista: string;
        nombreArtista: string;
        imagenArtista: string;
    };
    album: {
        _idAlbum: string;
        nombreAlbum: string,
        imagenAlbum: string
    };
}

export interface IPlayList {
    _id: string;
    numeroInicio: number;
    nombre: string;
    canciones: ICancion[];
}

/*
export interface IAlbum {
    _id: string;
    artista:string;
    nombre: string;
    numeroCanciones: number;
    imagenPortada: string;
    tipoDeInfomacion: string;
    registrationDate: string;
    canciones: ICancion[];
}

export interface ICancion {
    _id: string;
    artista:{
		_id:string;
		nombre:string;
		imagen:string;
	};
	nombre: string;
	audio:string;
	album: string;
	registrationDate:string;
	duracion:string;
	precio:string;
    tipo:string;
}
*/
