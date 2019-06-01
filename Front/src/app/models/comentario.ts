import { IUserLikeCommentary } from "./usuario";

export interface IComentario {
    _id: string;
    usuario: string;
    publicacion: string;
    texto: string;
    registrationDate: string;
}

export interface IComentarioPerfil {
    _id: string;
    usuario: IUserLikeCommentary;
}

