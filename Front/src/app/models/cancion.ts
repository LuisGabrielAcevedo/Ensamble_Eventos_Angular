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

export interface ICancionPerfil {
	_id: string;
	audio:string;
	nombre: string;
	album: string;
	registrationDate:string;
	duracion:string;
	precio:string;
    tipo:string;
}