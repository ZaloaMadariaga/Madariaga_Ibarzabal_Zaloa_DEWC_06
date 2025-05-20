import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastfmService } from '../../services/lastfm.service';
import { Artist } from '../../models/artist.model';

@Component({
  selector: 'app-add-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-favorite.component.html',
})
export class AddFavoriteComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private lastfmService: LastfmService) {}

  ngOnInit(): void {
    this.lastfmService.getTopArtists().subscribe(data => {
      this.artists = data.artists.artist;
    });
  }

  addToFavorites(artist: Artist): void {
    let favorites: Artist[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    // Verificar si el artista ya está en favoritos por su nombre
    if (!favorites.some(fav => fav.name === artist.name)) {
      favorites.push(artist);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${artist.name} añadido a favoritos.`);
    } else {
      alert(`${artist.name} ya está en tus favoritos.`);
    }
  }
}