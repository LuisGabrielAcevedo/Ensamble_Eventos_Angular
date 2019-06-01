export interface IVideo {
    _id: string;
    usuario: string;
    video: string;
    album: string;
    registrationDate: string;
    duracion: string;
}

export interface IVideoPerfil {
    _id: string;
    video: string;
    album: string;
    registrationDate: string;
    duracion: string;
}