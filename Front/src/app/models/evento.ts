export interface IEvento {
    _id:string;
    artista: string;
    titulo: string;
    fechaEvento: string;
    direccion: string;
    ciudad: string;
    barrio: string;
    hora: string;
    registrationDate: string;
    tipoDeEvento: string;
    entradas: {
        precio1: {
            tipo1: string;
            precio1: string;
            cantidad1: string;
        },
        precio2: {
            tipo2: string;
            precio2: string;
            cantidad2: string;
        },
        precio3: {
            tipo3: string;
            precio3: string;
            cantidad3: string;
        }
    }
}