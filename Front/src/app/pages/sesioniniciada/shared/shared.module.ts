import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NotificationinformationbuttonComponent } from './notificationinformationbutton/notificationinformationbutton.component';
import { ProfileinformationbuttonComponent } from './profileinformationbutton/profileinformationbutton.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SuperiormodalComponent } from './superiormodal/superiormodal.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { SocialcardComponent } from './socialcard/socialcard.component';
import { PublicationComponent } from './publication/publication.component';
import { NewpublicationComponent } from './newpublication/newpublication.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';
import { Modal1Component } from './modal1/modal1.component';
import { CancionesComponent } from './canciones/canciones.component';
import { AlbumsComponent } from './albums/albums.component';
import { PlayerSandbox } from '../../../sandBox/player.sandBox';
import { LoadingComponent } from './loading/loading.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Pipe Module
import { PipesModule } from '../../../pipes/pipes.module';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [

    HeaderComponent,
    SidebarComponent,
    NotificationinformationbuttonComponent,
    ProfileinformationbuttonComponent,
    CarouselComponent,
    SuperiormodalComponent,
    ContactusComponent,
    MenuComponent,
    NewpublicationComponent,
    SocialcardComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    List1Component,
    List2Component,
    List3Component,
    Modal1Component,
    AlbumsComponent,
    CancionesComponent,
    LoadingComponent,
    MensajeComponent,
    NotificationsListComponent
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NotificationinformationbuttonComponent,
    ProfileinformationbuttonComponent,
    CarouselComponent,
    SuperiormodalComponent,
    ContactusComponent,
    MenuComponent,
    SocialcardComponent,
    PublicationComponent,
    NewpublicationComponent,
    SidebarComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    List1Component,
    List2Component,
    List3Component, 
    Modal1Component,
    AlbumsComponent,
    CancionesComponent,
    LoadingComponent,
    MensajeComponent,
    PlaylistComponent,
    NotificationsListComponent
    
  ],
  providers: [PlayerSandbox]
})
export class SharedModule { }
