import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { SesionIniciadaComponent } from './sesioniniciada.component';

// Rutas
import { SesionIniciadaRouting } from './sesioniniciada.routing';

// Modulos
import { SharedModule } from './shared/shared.module';

// Pipes
import { PipesModule } from '../../pipes/pipes.module';






@NgModule({
  imports: [
    CommonModule,
    SesionIniciadaRouting,
    SharedModule,
    PipesModule
  ],
  declarations: [SesionIniciadaComponent ]
})
export class SesioniniciadaModule { }
