import { IUsuario } from './usuario';
import { IArtistInformation } from './informacionArtista';
import { IAlbumPerfil } from './album';
import { IPublicacionPerfil } from './publicacion';
import { IFollow } from './follow';

export interface IArtistId {
    _id: string;
}

export interface IArtistNombre {
    _nombre: string;
}

export interface IArtistPerfilResponse {
    artista: IUsuario;
    estadoRespuesta: string;
    informacionArtista: IArtistInformation;
    loSigo: IFollow;
    meSigue: IFollow;
    msg: string;
}
