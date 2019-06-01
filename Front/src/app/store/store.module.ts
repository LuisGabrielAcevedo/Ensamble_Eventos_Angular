import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from '.';
import { environment } from '../../environments/environment';
import { ArtistEffects } from './artistas/artistas.effects';
import { DataBaseEffects } from './dataBase/dataBase.effects';
import { PlayerEffects } from './player/player.effetcts';


@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule,
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
        EffectsModule.forRoot([
            //Efectos
            ArtistEffects,
            DataBaseEffects,
            PlayerEffects
        ])
    ],
    exports: [],
    declarations: [],
    providers: [
    ]
})
export class AppStoreModule { }

