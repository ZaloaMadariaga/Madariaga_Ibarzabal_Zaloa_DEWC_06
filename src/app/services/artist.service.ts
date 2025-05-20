import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'https://api.example.com/artists';

  constructor(private http: HttpClient) {}

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl);
  }

  getArtist(id: number): Observable<Artist> {
    return this.http.get<Artist>(\`\${this.apiUrl}/\${id}\`);
  }

  addArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.apiUrl, artist);
  }

  updateArtist(artist: Artist): Observable<Artist> {
    return this.http.put<Artist>(\`\${this.apiUrl}/\${artist.id}\`, artist);
  }

  deleteArtist(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }
}
