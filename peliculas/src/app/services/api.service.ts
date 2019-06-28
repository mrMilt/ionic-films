import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  searchFilm(film:string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + environment.apiKey + '&query=' + film);
  }

  searchFilmByGenre(id:number) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + environment.apiKey + '&with_genres=' + id);
  }
}
