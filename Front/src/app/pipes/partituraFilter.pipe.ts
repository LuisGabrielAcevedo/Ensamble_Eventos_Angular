import { Pipe, PipeTransform } from '@angular/core';
import { Global } from '../services/http/url.service';
import { partituras } from '../services/mocks/mock.partitura';


@Pipe({
  name: 'partituraFilter'
})
export class PartituraFilterPipe implements PipeTransform {
        transform (items: any[], buscarTexto: string): any[] {
          if (!items || !buscarTexto) {
              return items; }
            return items.filter(e =>
                e.artista.toLowerCase().indexOf(buscarTexto.toLowerCase()) !== -1);
        }
}


// transform (items: any[], value: string, label: string): any[] {
//     if (!items) { return []; }
//     if (!value) { return  items; }
//     if (value === '' || value == null) { return []; }
//     return items.filter(e => e[label].toLowerCase().indexOf(value) > -1 );

//   }
