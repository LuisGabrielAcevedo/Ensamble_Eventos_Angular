// 1. Se usa para el registro de usuarios
export interface IUserRegisterRequest {
    nombre: string;
    apellido: string;
    nombreUsuario: string;
    email: string;
    clave: string;
    rol: string;
}

// 2. Se usa para el login de usuarios
export interface IUserLoginRequest {
    email: string;
    clave: string;
}

// 3. Respuesta del loguin que va por todos los componentes a traves del store
export interface IUsuario {
    _id: string;
    nombreUsuario: string;
    email: string;
    nombre: string;
    apellido: string;
    tipo: string;
    imagen: string;
    imagenPortada: string;
    fechaRegistro: string;
    rol: string;
    cuentaActiva: boolean;
    datosCompletos: boolean;
    pais: string;
    telefono: string;
    ultimaHoraDeConexion: string;
}

// 4. Lista de usuarios
export interface IUsuarioList {
    _id: string;
    nombre: string;
    apellido: string;
    nombreUsuario: string;
    email: string;
    imagen: string;
    rol: string;
    cuentaActiva: string;
}























export interface IUserLike {
    _id: string;
    nombre: string;
    imagen: string;
}

export interface IUserLikeCommentary {
    _id: string;
    nombre: string;
    imagen: string;
}

