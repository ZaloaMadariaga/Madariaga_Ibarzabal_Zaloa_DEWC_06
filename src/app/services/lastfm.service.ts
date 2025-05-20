import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LastfmService {
  private apiKey = '3a51bdd240477f1b7b7b3f384d9998c7';
  private apiUrl = 'https://ws.audioscrobbler.com/2.0/';

  constructor(private http: HttpClient) {}

  getTopArtists(): Observable<any> {
    const params = new HttpParams()
      .set('method', 'chart.gettopartists')
      .set('api_key', this.apiKey)
      .set('format', 'json');

    return this.http.get(this.apiUrl, { params });
  }

  getArtistInfo(artistName: string): Observable<any> {
    const params = new HttpParams()
      .set('method', 'artist.getinfo')
      .set('artist', artistName)
      .set('api_key', this.apiKey)
      .set('format', 'json');

    return this.http.get(this.apiUrl, { params });
  }

  getTopAlbums(artistName: string): Observable<any> {
    const params = new HttpParams()
      .set('method', 'artist.gettopalbums')
      .set('artist', artistName)
      .set('api_key', this.apiKey)
      .set('format', 'json');

    return this.http.get(this.apiUrl, { params });
  }

  getTopTracks(artistName: string): Observable<any> {
    const params = new HttpParams()
      .set('method', 'artist.gettoptracks')
      .set('artist', artistName)
      .set('api_key', this.apiKey)
      .set('format', 'json');

    return this.http.get(this.apiUrl, { params });
  }
}
