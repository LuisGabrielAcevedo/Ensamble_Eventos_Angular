import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Componentes
import { AppComponent } from './app.component';

// Rutas
import { AppRoutingModule } from './app.routing';

// Servicios
import { ServiceModule } from './services/service.module';

// Modulos
import { AppStoreModule } from './store/store.module';
import { SharedModule } from './pages/sesioniniciada/shared/shared.module';
import { RigthsidebarModule } from './pages/rigthsidebar/rigthsidebar.module';
import { SandBoxModule } from './sandBox/sandBox.module';

// Pipes
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    ServiceModule,
    AppStoreModule,
    SharedModule,
    RigthsidebarModule,
    SandBoxModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
