import { IUserLike } from "./usuario";

export interface ILike {
	_id: string;
	usuario: string;
	publicacion: string;
	registrationDate: String;
}

export interface ILikePerfil{
	_id: string;
	usuario: IUserLike;
}

