import { ILikePerfil } from './like';
import { IComentarioPerfil } from './comentario';

export interface IPublicacion {
    _id: string;
    usuario: string;
    nombre: string;
    tipoDeInfomacion: string;
    registrationDate: string;
}

export interface IPublicacionPerfil {
    _id: string;
    texto: string;
    tipoDeArchivo: string;
    archivo: string;
    registrationDate: string;
    cantidadLikes: String;
    likes: ILikePerfil[];
    cantidadComentarios: string;
    comentarios: IComentarioPerfil[];
}
