import { Injectable } from '@angular/core';
import { Film } from "../components/film/film";
import { FILMS } from "../mocks/mock-film";
import { Observable, tap} from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  url = 'https://www.qando.es/docs/films.php';

  getFilms(): Observable<Film []> {
    return this.http.get<Film []>(this.url)
      .pipe(
        tap(data =>
          console.log(JSON.stringify(data)))
      );
  }

  constructor(private http: HttpClient) { }
}
