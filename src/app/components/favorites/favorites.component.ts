import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-favorites',
  standalone: true,

  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favService: FavoriteService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favService.getFavorites().subscribe(data => (this.favorites = data));
  }

  remove(id: string) {
    this.favService.deleteFavorite(id).subscribe(() => this.loadFavorites());
  }
}
