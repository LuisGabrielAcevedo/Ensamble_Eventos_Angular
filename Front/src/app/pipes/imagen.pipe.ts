import { Pipe, PipeTransform } from '@angular/core';
import { Global } from '../services/http/url.service';


@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string): any {
    const url = `${Global.url_api}getImagen/`;
    // 1. Usuario sin imagen
    if (img === null || !img) {
      return 'assets/adminpro/images/users/Imagen.png';
    }

    // 2. Imagen de google
    if ((img.indexOf('http') >= 0) && (img != null)) {
      return img;
    } else {
      // Arreglar despues en back
      if (img.includes('uploads/usuarios')) {
        const imgSplit = img.split('/');
        return url + imgSplit[2];
      }
    }
  }
}
