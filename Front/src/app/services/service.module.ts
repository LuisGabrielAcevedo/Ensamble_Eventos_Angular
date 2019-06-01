import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Servicios
import {
  NotificationsService,
  UsersService,
  DataBaseService,
  LoadingService,
  SharedService,
  SidebarService,
  EventosService,
  CancionesService,
  MensajeService,
  RegisterService,
  LocalStorageService,
  BuscadorService,
  SubirArchivosService,
  ChatService,
  FollowsService
} from './index.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NotificationsService,
    UsersService,
    DataBaseService,
    SidebarService,
    SharedService,
    EventosService,
    LoadingService,
    CancionesService,
    MensajeService,
    RegisterService,
    LocalStorageService,
    BuscadorService,
    SubirArchivosService,
    ChatService,
    FollowsService
  ],
  declarations: []
})
export class ServiceModule { }
