import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { LastfmService } from '../../services/lastfm.service';
import { Artist } from '../../models/artist.model';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './artist-list.component.html',
})
export class ArtistListComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private lastfmService: LastfmService, private router: Router) {}

  ngOnInit(): void {
    this.lastfmService.getTopArtists().subscribe(data => {

      this.artists = data.artists.artist;
      
    });
  }

  goToDetail(artist: Artist) {
    this.router.navigate(['/artist', artist.name]);
  }
}
