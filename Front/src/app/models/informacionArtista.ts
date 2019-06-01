import { IUsuario } from './usuario';

// 1. Informacion del artista asi se compartira por el store
export interface IArtistInformation {
    _id: string;
    rol: string;
    artista: string;
    facebook: string;
    instagram: string;
    youtube: string;
    web: string;
    descripcion: string;
    detalles: string;
    integrantes: string[];
    numeroPresentaciones: string;
    visitasPerfil: string;
    seguidores: string;
    seguidos: string;
    actuacion: {
        precioPorHora: string;
        precioPorDosHoras: string;
        precioPorTresHoras: string;
    };
}

// 2. Registro artista 1
export class IArtistInformationRequest1 {
    artista: string;
    rol: string;
    facebook: string;
    instagram: string;
    youtube: string;
    web: string;
    descripcion: string;
    detalles: string;
}

// 3. Registro artista 2
export class IArtistInformationRequest2 {
    nombre: string;
    apellido: string;
}




