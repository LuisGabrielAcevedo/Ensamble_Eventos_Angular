export var obtenerArtista = [
    {
        artista: {
            _id: '1',
            nombre: 'Ensamble avanti',
            apellido: 'Ensamble avanti',
            usuario: 'Ensamble avanti',
            email: 'Ensambleavanti@gmail.com',
            clave: '123456',
            imagen: 'ensamble.jpg',
            registrationDate: '20/11/2017',
            rol: 'Artista'
        },
        informacion: {
            _id: '1',
            artista: '1',
            facebook: 'Ensambleavanti',
            instagram: 'Ensambleavanti',
            youtube: 'Ensambleavanti',
            web: 'www.ensambleavanti.com',
            descripcion: 'Duo de violin y teclado para eventos musicales.',
            detalles: 'Tocamos todo tipo de musica, pop, rock, baladas, tangos.',
            numeroPresentaciones: '0',
            visitasPerfil: '0',
            seguidores: '30000',
            seguidos: '10',
            actuacion: {
                precioPorHora: '4400',
                precioPorDosHoras: '6000',
                precioPorTresHoras: '8000'
            }
        },
        albums: {
            cantidad: 5,
            data: [
                { _id: '1', nombre: 'Mis Fotos 2018', tipoDeInfomacion: 'IMAGEN', imagenPortada: '1057e1f60f9a976.jpg' },
                { _id: '2', nombre: 'Concierto en la plata', tipoDeInfomacion: 'IMAGEN', imagenPortada: '1057e1f60f9a976.jpg' },
                { _id: '3', nombre: 'Canciones', tipoDeInfomacion: 'AUDIO', imagenPortada: '1057e1f60f9a976.jpg' },
                { _id: '5', nombre: 'Estrellas', tipoDeInfomacion: 'AUDIO', imagenPortada: '1057e1f60f9a976.jpg' },
                { _id: '4', nombre: 'Videos', tipoDeInfomacion: 'VIDEO', imagenPortada: '1057e1f60f9a976.jpg' }
            ]
        },
        publicaciones: {
            cantidad: 3,
            data: [
                {
                    _id: '1',
                    texto: 'Escucha nuestro ultimo cover de coldplay',
                    tipoDeArchivo: 'VIDEO',
                    archivo: 'viva.mp4',
                    registrationDate: 'hace 2 dias',
                    cantidadLikes: '0',
                    likes: null,
                    cantidadComentarios: '0',
                    comentarios: null
                },
                {
                    _id: '1',
                    texto: '¡Gracias por asistir al concierto de hoy!',
                    tipoDeArchivo: 'IMAGEN',
                    archivo: 'Concierto.jpg',
                    registrationDate: 'Hace 3 dias',
                    cantidadLikes: '0',
                    likes: null,
                    cantidadComentarios: '0',
                    comentarios: null
                },
                {
                    _id: '3',
                    texto: null,
                    tipoDeArchivo: 'VIDEO',
                    archivo: 'Bitter.mp4',
                    registrationDate: 'Hace 1 meses',
                    cantidadLikes: '0',
                    likes: null,
                    cantidadComentarios: '0',
                    comentarios: null
                },
                {
                    _id: '4',
                    texto: 'Portada del proximo disco',
                    tipoDeArchivo: 'IMAGEN',
                    archivo: 'ensamble.jpg',
                    registrationDate: 'Hace 2 meses',
                    cantidadLikes: '0',
                    likes: null,
                    cantidadComentarios: '0',
                    comentarios: null
                }
            ]
        },
        fotos: {
            cantidad: 4,
            data: [
                { _id: '12', album: '2', imagen: '1', registrationDate: '20', },
                { _id: '132', album: '2', imagen: '2', registrationDate: '20' },
                { _id: '12', album: '1', imagen: '3', registrationDate: '20' },
                { _id: '132', album: '1', imagen: '4', registrationDate: '20' }
            ]
        },
        canciones: {
            cantidad: 4,
            data: [
                { _id: '1', album: '3', nombre: 'Chandellier', audio: 'Chandellier.mp3', registrationDate: '20/11/2017', duracion: '06:34', precio: '150 $AR', tipo: 'privado' },
                { _id: '2', album: '3', nombre: 'Titanium', audio: 'Titanium.mp3', registrationDate: '20/11/2017', duracion: '07:32', precio: '150 $AR', tipo: 'privado' },
                { _id: '3', album: '3', nombre: 'Paradise', audio: 'Paradise.mp3', registrationDate: '20/11/2017', duracion: '02:35', precio: null, tipo: 'publico' },
                { _id: '4', album: '5', nombre: 'Yellow', audio: 'Yellow.mp3', registrationDate: '20/11/2017', duracion: '03:59', precio: null, tipo: 'publico' }
            ]
        },
        videos: {
            cantidad: 4,
            data: [
                { _id: '12', album: '3', video: '1', registrationDate: '20', duracion: '23' },
                { _id: '132', album: '3', video: '2', registrationDate: '20', duracion: '23' },
                { _id: '12', album: '1', video: '3', registrationDate: '20', duracion: '23' },
                { _id: '132', album: '1', video: '4', registrationDate: '20', duracion: '23' }
            ]
        },
        loSigo: null,
        meSigue: null
    },
    {
        artista: {
            _id: '2',
            nombre: 'Coldplay',
            apellido: 'Coldplay',
            usuario: 'Coldplay',
            email: 'Coldplay@gmail.com',
            clave: '123456',
            imagen: 'coldplay.jpg',
            registrationDate: '20/11/2017',
            rol: 'Artista'
        },
        informacion: {
            _id: '2',
            artista: '2',
            facebook: 'Coldplay',
            instagram: 'Coldplay',
            youtube: 'Coldplay',
            web: 'www.coldplay.com',
            descripcion: 'Banda britanica de pop rock.',
            detalles: 'Estaremos de gira por america este año.',
            numeroPresentaciones: '0',
            visitasPerfil: '0',
            seguidores: '0',
            seguidos: '0',
            actuacion: {
                precioPorHora: '4400',
                precioPorDosHoras: '6000',
                precioPorTresHoras: '8000'
            }
        },
        albums: {
            cantidad: 5,
            data: [
                { _id: '4', nombre: 'Coldplay 2018', tipoDeInfomacion: 'AUDIO', imagenPortada: '1057e1f60f9a976.jpg' }
            ]
        },
        publicaciones: {
            cantidad: 2,
            data: []
        },
        fotos: {
            cantidad: 4,
            data: []
        },
        canciones: {
            cantidad: 4,
            data: [
                { _id: '5', album: '4', nombre: 'A Sky full of stars', audio: 'co.mp3', registrationDate: '20/11/2017', duracion: '06:34', precio: '150 $AR', tipo: 'privado' }
            ]
        },
        videos: {
            cantidad: 4,
            data: []
        },
        loSigo: { _id: '2333', usuarioQueSigue: '323', usuarioSeguido: '2323' },
        meSigue: null
    },
    {
        artista: {
            _id: '3',
            nombre: 'Maroon 5',
            apellido: 'Maroon 5',
            usuario: 'Maroon 5',
            email: 'Maroon5@gmail,com',
            clave: '123456',
            imagen: 'maroon5.jpg',
            registrationDate: '20/11/2017',
            rol: 'Artista'
        },
        informacion: {
            _id: '3',
            artista: '3',
            facebook: 'Maroon5',
            instagram: 'Maroon5',
            youtube: 'Maroon5',
            web: 'www.maroon5.com',
            descripcion: 'Banda americana de pop rock.',
            detalles: 'Mas de 100 canciones en spotify.',
            numeroPresentaciones: '0',
            visitasPerfil: '0',
            seguidores: '0',
            seguidos: '0',
            actuacion: {
                precioPorHora: '4400',
                precioPorDosHoras: '6000',
                precioPorTresHoras: '8000'
            }
        },
        albums: {
            cantidad: 5,
            data: [
                { _id: '4', nombre: 'Marron 5 2018', tipoDeInfomacion: 'AUDIO', imagenPortada: '1057e1f60f9a976.jpg' }
            ]
        },
        publicaciones: {
            cantidad: 2,
            data: []
        },
        fotos: {
            cantidad: 4,
            data: []
        },
        canciones: {
            cantidad: 4,
            data: [
                { _id: '6', album: '4', nombre: 'Girls like you', audio: 'ma.mp3', registrationDate: '20/11/2017', duracion: '06:34', precio: '150 $AR', tipo: 'privado' }
            ]
        },
        videos: {
            cantidad: 4,
            data: []
        },
        loSigo: null,
        meSigue: { _id: '2333', usuarioQueSigue: '323', usuarioSeguido: '2323' }
    },
    {
        artista: {
            _id: '4',
            nombre: 'Dua lipa',
            apellido: 'Dua lipa',
            usuario: 'Dua lipa',
            email: 'Dualipa@gmail.com',
            clave: '123456',
            imagen: 'dualipa.jpg',
            registrationDate: '20/11/2017',
            rol: 'Artista'
        },
        informacion: {
            _id: '2',
            artista: '2',
            facebook: 'Dua lipa',
            instagram: 'Dua lipa',
            youtube: 'Dua lipa',
            web: 'www.Dualipa.com',
            descripcion: 'Cantante britanica de pop.',
            detalles: 'Estaremos de gira por america este año.',
            numeroPresentaciones: '0',
            visitasPerfil: '0',
            seguidores: '0',
            seguidos: '0',
            actuacion: {
                precioPorHora: '4400',
                precioPorDosHoras: '6000',
                precioPorTresHoras: '8000'
            }
        },
        albums: {
            cantidad: 5,
            data: [
                { _id: '4', nombre: 'Dua lipa 2018', tipoDeInfomacion: 'AUDIO', imagenPortada: '1057e1f60f9a976.jpg' }
            ]
        },
        publicaciones: {
            cantidad: 2,
            data: []
        },
        fotos: {
            cantidad: 4,
            data: []
        },
        canciones: {
            cantidad: 4,
            data: [
                { _id: '7', album: '4', nombre: 'One kiss', audio: 'dua1.mp3', registrationDate: '20/11/2017', duracion: '06:34', precio: '150 $AR', tipo: 'privado' },
                { _id: '8', album: '4', nombre: 'Be the one', audio: 'dua2.mp3', registrationDate: '20/11/2017', duracion: '07:32', precio: '150 $AR', tipo: 'privado' },
                { _id: '9', album: '4', nombre: 'New rules', audio: 'dua3.mp3', registrationDate: '20/11/2017', duracion: '02:35', precio: null, tipo: 'publico' },
                { _id: '10', album: '4', nombre: 'No lie', audio: 'dua4.mp3', registrationDate: '20/11/2017', duracion: '03:59', precio: null, tipo: 'publico' }
            ]
        },
        videos: {
            cantidad: 4,
            data: []
        },
        loSigo: { _id: '2333', usuarioQueSigue: '323', usuarioSeguido: '2323' },
        meSigue: null
    },
    {
        artista: {
            _id: '6',
            nombre: 'Thirty Seconds To Mars',
            apellido: 'Thirty Seconds To Mars',
            usuario: 'Thirty Seconds To Mars',
            email: 'ThirtySecondsToMars@gmail.com',
            clave: '123456',
            imagen: '30.jpg',
            registrationDate: '20/11/2017',
            rol: 'Artista'
        },
        informacion: {
            _id: '6',
            artista: '6',
            facebook: 'Thirty Seconds To Mars',
            instagram: 'Thirty Seconds To Mars',
            youtube: 'Thirty Seconds To Mars',
            web: 'www.ThirtySecondsToMars.com',
            descripcion: 'Banda britanica de pop rock.',
            detalles: 'Estaremos de gira por america este año.',
            numeroPresentaciones: '0',
            visitasPerfil: '0',
            seguidores: '0',
            seguidos: '0',
            actuacion: {
                precioPorHora: '4400',
                precioPorDosHoras: '6000',
                precioPorTresHoras: '8000'
            }
        },
        albums: {
            cantidad: 5,
            data: [
                { _id: '4', nombre: '2018', tipoDeInfomacion: 'AUDIO', imagenPortada: '1057e1f60f9a976.jpg' }
            ]
        },
        publicaciones: {
            cantidad: 2,
            data: []
        },
        fotos: {
            cantidad: 4,
            data: []
        },
        canciones: {
            cantidad: 4,
            data: [
                { _id: '11', album: '4', nombre: 'Dangerous Night', audio: 'Dangerous Night.mp3', registrationDate: '20/11/2017', duracion: '07:32', precio: '150 $AR', tipo: 'privado' },
                { _id: '12', album: '4', nombre: 'Rescue Me', audio: 'Rescue Me.mp3', registrationDate: '20/11/2017', duracion: '02:35', precio: null, tipo: 'publico' },
                { _id: '13', album: '4', nombre: 'Walk On Water', audio: 'Walk On Water.mp3', registrationDate: '20/11/2017', duracion: '03:59', precio: null, tipo: 'publico' }
            ]
        },
        videos: {
            cantidad: 4,
            data: []
        },
        loSigo: { _id: '2333', usuarioQueSigue: '323', usuarioSeguido: '2323' },
        meSigue: null
    },
    {
        artista: {
            _id: '5',
            nombre: 'Caramelos De Cianuro',
            apellido: 'Caramelos De Cianuro',
            usuario: 'Caramelos De Cianuro',
            email: 'CaramelosDeCianuro@gmail.com',
            clave: '123456',
            imagen: 'caramelos.jpg',
            registrationDate: '20/11/2017',
            rol: 'Artista'
        },
        informacion: {
            _id: '6',
            artista: '6',
            facebook: 'Caramelos De Cianuro',
            instagram: 'Caramelos De Cianuro',
            youtube: 'Caramelos De Cianuro',
            web: 'www.CaramelosDeCianuro.com',
            descripcion: 'Banda venezolana de pop rock.',
            detalles: 'Estaremos de gira por america este año.',
            numeroPresentaciones: '0',
            visitasPerfil: '0',
            seguidores: '0',
            seguidos: '0',
            actuacion: {
                precioPorHora: '4400',
                precioPorDosHoras: '6000',
                precioPorTresHoras: '8000'
            }
        },
        albums: {
            cantidad: 5,
            data: [
                { _id: '4', nombre: 'Caramelos 2018', tipoDeInfomacion: 'AUDIO', imagenPortada: '1057e1f60f9a976.jpg' }
            ]
        },
        publicaciones: {
            cantidad: 2,
            data: []
        },
        fotos: {
            cantidad: 4,
            data: []
        },
        canciones: {
            cantidad: 4,
            data: [
                { _id: '14', album: '4', nombre: 'Rubia Sol Morena Luna', audio: 'Rubia Sol Morena Luna.mp3', registrationDate: '20/11/2017', duracion: '03:59', precio: null, tipo: 'publico' }
            ]
        },
        videos: {
            cantidad: 4,
            data: []
        },
        loSigo: { _id: '2333', usuarioQueSigue: '323', usuarioSeguido: '2323' },
        meSigue: null
    }
]

export var listaDeArtistas = {
    artistas: [
        { _id: '1', nombre: 'Ensamble Avanti', imagen: 'ensamble.jpg' },
        { _id: '2', nombre: 'Coldplay', imagen: 'coldplay.jpg' },
        { _id: '3', nombre: 'Maroon 5', imagen: 'maroon5.jpg' },
        { _id: '4', nombre: 'Dua Lipa', imagen: 'dualipa.jpg' },
        { _id: '5', nombre: 'Caramelos De Cianuro', imagen: 'caramelos.jpg' },
        { _id: '6', nombre: 'Thirty Seconds To Mars', imagen: '30.jpg' }
    ]
}
