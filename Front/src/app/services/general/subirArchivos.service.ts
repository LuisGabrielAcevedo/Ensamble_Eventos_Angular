import { Injectable } from '@angular/core';

// Url


@Injectable()
export class SubirArchivosService {
  constructor() {
  }
  SubirArchivo(url: string, params: string[], files: File[], token: string, name: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formData.append(name, files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open('PUT', url, true);
      // xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);
    });
  }
}

