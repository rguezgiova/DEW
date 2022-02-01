import { Injectable } from '@angular/core';
import { Film } from "../components/film/film";
import { FILMS } from "../mocks/mock-film";
import {catchError, Observable, of, tap, map } from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  url = 'https://www.qando.es/docs/films.php';

  httpOptions = {
    headers: new HttpHeaders({'Concert-Type': 'application/json'})
  };

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.url)
      .pipe(
        tap(data =>
          console.log(JSON.stringify(data))),
          catchError(this.handleError<Film[]>('getFilms', []))
      );
  }

  getFilm(id: number): Observable<Film> {
    const url = `${this.url}/${id}`;
    return this.http.get<Film>(url).pipe(
      tap(_ => console.log(`fetched film id = ${id}`)),
      catchError(this.handleError<Film>('getFilm id = ${id}'))
    );
  }

  update(film: Film): Observable<any> {
    return this.http.put(this.url, film, this.httpOptions).pipe(
      tap(_ => console.log(`Updated film id = ${film.id}`)),
      catchError(this.handleError<any>('updateFilm'))
    );
  }

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
