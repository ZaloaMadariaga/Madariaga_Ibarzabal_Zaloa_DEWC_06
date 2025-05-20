// app.routes.ts
import { Routes } from '@angular/router';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AddFavoriteComponent } from './components/add-favorite/add-favorite.component';

export const routes: Routes = [
  { path: '', component: ArtistListComponent },
  { path: 'artist/:name', component: ArtistDetailComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'add-favorite', component: AddFavoriteComponent }
];
