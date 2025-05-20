import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LastfmService } from '../../services/lastfm.service';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-detail.component.html',
})
export class ArtistDetailComponent implements OnInit {
  artist: any;
  albums: any[] = [];
  tracks: any[] = [];

  constructor(private route: ActivatedRoute, private service: LastfmService) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.service.getArtistInfo(name).subscribe(data => {
        this.artist = data.artist;
      });

      this.service.getTopAlbums(name).subscribe(data => {
        this.albums = data.topalbums.album;
      });

      this.service.getTopTracks(name).subscribe(data => {
        this.tracks = data.toptracks.track;
      });
    }
  }
}
