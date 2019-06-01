export interface IMensaje {
    type: string;
    text: string;
    autoClose: {
        state: boolean
        time: number
    };
}


//mensaje enviado desde el CAROUSEL 
export interface IMensajeCarousel{
    nombre: string;
    correo: string;
    mensaje:string;
}
