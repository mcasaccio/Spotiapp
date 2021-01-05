import { Routes } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'artist/:id', component: ArtistComponent},
    // si la ruta esta vacia redirecciona al /home
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    // anter cualquier ruta inexistente el ** redirecciona al /home
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];