import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserAutenticatedGuard } from './guard/user-autenticated.guard';
import { PlaylistComponent } from './playlist/playlist.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: "home",
        pathMatch: "full"
    }, 
    {
        path: 'home',
        component: HomeComponent,
        canActivate:[UserAutenticatedGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'playlist',
        component: PlaylistComponent,
        canActivate:[UserAutenticatedGuard]

    },
    
];
