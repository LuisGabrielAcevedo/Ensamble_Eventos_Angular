import { ICancion } from "./cancion";

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

export interface IAlbumPerfil {
    _id: string;
    nombre: string;
    tipoDeInfomacion: string;
    imagenPortada: string;
}