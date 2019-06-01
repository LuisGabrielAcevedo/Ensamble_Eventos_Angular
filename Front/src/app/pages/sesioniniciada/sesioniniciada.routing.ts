import { Routes, RouterModule } from '@angular/router';
import { SesionIniciadaComponent } from './sesioniniciada.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'statisticsapp',
        component: SesionIniciadaComponent,
        loadChildren: './content/statisticsapp/statisticsapp.module#StatisticsAppModule'
    },
    {
        path: 'home',
        component: SesionIniciadaComponent,
        loadChildren: './content/home/home.module#HomeModule'
    },

    {
        path: 'userinformation',
        component: SesionIniciadaComponent,
        loadChildren: './content/userinformation/userinformation.module#UserInformationModule'
    },
    {
        path: 'sheetmusic',
        component: SesionIniciadaComponent,
        loadChildren: './content/sheetmusic/sheetmusic.module#SheetMusicModule'
    },
    {
        path: 'profile',
        component: SesionIniciadaComponent,
        loadChildren: './content/profile/profile.module#ProfileModule'
    },
    {
        path: 'other',
        component: SesionIniciadaComponent,
        loadChildren: './othersharedcomponents/othersharedcomponents.module#OthersharedcomponentsModule'
    },
    {
        path: 'ensambledatabase',
        component: SesionIniciadaComponent,
        loadChildren: './content/database/database.module#DatabaseModule'
    },
    {
        path: 'messenger',
        component: SesionIniciadaComponent,
        loadChildren: './content/messengerservice/messengerservice.module#MessengerserviceModule'
    }
];

export const SesionIniciadaRouting = RouterModule.forChild(routes);
