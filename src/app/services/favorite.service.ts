import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private apiUrl = 'https://your.mockapi.io/favorites';

  constructor(private http: HttpClient) {}

  getFavorites(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addFavorite(fav: any): Observable<any> {
    return this.http.post(this.apiUrl, fav);
  }

  deleteFavorite(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}