export var editarUser = {
    estadoRespuesta: 'OK',
    msg: 'Usuario actualizado',
    usuario: {
        _id: '5b646ec1a34aef0149d7c452',
        usuario: 'Luis',
        email: 'korn@red.com',
        nombre: 'Luis',
        apellido: 'Acevedo',
        tipo: 'google',
        imagen: '61vNDuEzW1yweADMH1tdcWxa.jpg',
        registrationDate: 'August 3rd 2018, 11:03:29 am',
        rol: 'Usuario',
        completed: false
    }
};


export const listaDeSeguidores = {
    estadoRespuesta: 'OK',
    usuarios:  [
        { _id: '1', nombre: 'Ensamble Avanti', imagen: 'ensamble.jpg' },
        { _id: '0', nombre: 'Apache', imagen: 'apache.jpg' },
        { _id: '3', nombre: 'Maroon 5', imagen: 'maroon5.jpg' },
        { _id: '4', nombre: 'Dua Lipa', imagen: 'dualipa.jpg' },
        { _id: '6', nombre: 'Thirty Seconds To Mars', imagen: '30.jpg' },
        { _id: '9', nombre: 'The Beatles', imagen: 'beatles.jpg' },
        { _id: '8', nombre: 'Korn', imagen: 'korn.jpg' },
        { _id: '7', nombre: 'Rawayana', imagen: 'rawayana.jpg' }
    ]
};

export const listaDeSeguidos = {
    estadoRespuesta: 'OK',
    usuarios:[
        { _id: '1', nombre: 'Ensamble Avanti', imagen: 'ensamble.jpg' },
        { _id: '2', nombre: 'Coldplay', imagen: 'coldplay.jpg' },
        { _id: '3', nombre: 'Maroon 5', imagen: 'maroon5.jpg' },
    ]
}

/*
cree estas llamadas en el servicio de usuarios
lo que debe hacer en los componentes de followed y following es aparte de lo de redux
llamar esta lista para tener los usuarios, lo que hacemos con redux es para manejar el estado del
boton pero si quiere eso lo vemos despues basicamente usted solo haga estas llamada y muestre los
usuario con el boton segui como esta en el componente list

redux devuelve algo asi ['3','4','4'] es porque despues uno compara
{ _id: '1', nombre: 'Ensamble Avanti', imagen: 'ensamble.jpg' }
si el id de este usuario esta en ['3','4','4'] el boton es segui depende de los casos

*/
