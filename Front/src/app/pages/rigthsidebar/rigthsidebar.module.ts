import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RigthsidebarComponent } from './rigthsidebar.component';
import { RigthsidebarRouting } from './rigthsidebar.routing';
import { PlayermoreComponent } from './playermore/playermore.component';
import { PlayerSandbox } from '../../sandBox/player.sandBox';
import { AccordionComponent } from './accordion/accordion.component';
import { CancionesService } from '../../services/index.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    RigthsidebarRouting,
    PerfectScrollbarModule,
    [AccordionModule.forRoot()]
  ],
  exports:[RigthsidebarComponent],
  declarations: [RigthsidebarComponent, PlayermoreComponent, AccordionComponent],
  providers:[PlayerSandbox, CancionesService]
})
export class RigthsidebarModule { }
