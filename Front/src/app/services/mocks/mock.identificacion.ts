export var login =
// Caso1
    // {
    //     estadoRespuesta: 'WARNING',
    //     msg:'contraseña invalida'
    // }
// Caso2
    // {
    //     estadoRespuesta: 'WARNING',
    //     msg: 'usuario invalido'
    // }
// Caso3
    // {
    //     estadoRespuesta: 'OK',
    //     usuario: {
    //         _id: '5b646ec1a34aef0149d7c452',
    //         usuario: 'Luis',
    //         email: 'korn@red.com',
    //         nombre: 'Luis gabriel',
    //         apellido: 'Acevedo', /*Para Banda Duo Trio Cuarteto apellido debe venir null*/
    //         tipo: 'Api',
    //         imagen: '61vNDuEzW1yweADMH1tdcWxa.jpg',
    //         registrationDate: 'August 3rd 2018, 11:03:29 am',
    //         rol: 'Usuario' /*Usuario Artista Banda Duo Trio Cuarteto*/,
    //         completed: false
    //     },
    //     token: 'wewejjebewbweeuiw8w8we8w9e9eweewe',
    //     lista1:['1','3','4'],
    //     lista2:['2','5','6']
    // }
// Caso4
    // {
    //     estadoRespuesta: 'ERROR',
    //     msg: 'Usuario no encontrado'
    // }

// Caso5

{
    estadoRespuesta: 'OK',
    usuario: {
        _id: '5b646ec1a34aef0149d7c452',
        usuario: 'Luis',
        email: 'korn@red.com',
        nombre: 'Luis gabriel',
        apellido: 'Acevedo', /*Para Banda Duo Trio Cuarteto apellido debe venir null*/
        tipo: 'Api',
        imagen: '61vNDuEzW1yweADMH1tdcWxa.jpg',
        registrationDate: 'August 3rd 2018, 11:03:29 am',
        rol: 'Artista' /*Usuario Artista Banda Duo Trio Cuarteto*/,
        completed: false
    },
    informacionArtista: {
        _id: '232323',
        artista: '5b646ec1a34aef0149d7c452',
        facebook: null,
        instagram: 'luisgr18',
        youtube: null,
        web: 'www.ensamble.com',
        descripcion: 'Duo de Piano y violin',
        detalles: 'Somos internacionales, reconocidos por innovar, hacemos covers.....',
        numeroPresentaciones: '520',
        visitasPerfil: '1200',
        seguidores: '4000',
        seguidos: '3',
        actuacion: null
    },
    token: 'wewejjebewbweeuiw8w8we8w9e9eweewe',
    lista1:['1','3','4'],
    lista2:['2','5','6']
}