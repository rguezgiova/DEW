import { Injectable } from '@angular/core';
import { Film } from "../components/film/film";
import { catchError, Observable, of, tap, map } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FetchData } from "../interfaces/fetch-data";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  urlFilms = 'https://mcuapi.herokuapp.com/api/v1/movies';
  films: Film[] = [];
  httpOptions = {
    headers: new HttpHeaders({'Concert-Type': 'application/json'})
  };

  getFilms(): void {
    this.http.get<FetchData>(this.urlFilms).subscribe(data => {
      console.log(data.data);
      data.data.forEach(element => {
        let film = new Film(element.id, element.title, element.cover_url, element.release_date, element.overview);
        this.films.push(film);
      });
        console.log(this.films);
    });
  }


  getFilm(id: number): Observable<Film> {
    const url = `${this.urlFilms}/${id}`;
    return this.http.get<Film>(url).pipe(
      tap(_ => console.log(`fetched film id = ${id}`)),
      catchError(this.handleError<Film>('getFilm id = ${id}'))
    );
  }

  update(film: Film): Observable<any> {
    return this.http.put(this.urlFilms, film, this.httpOptions).pipe(
      tap(_ => console.log(`Updated film id = ${film.id}`)),
      catchError(this.handleError<any>('updateFilm'))
    );
  }

  add(film: Film): Observable<Film> {
    return this.http.post<Film>(this.urlFilms, film, this.httpOptions).pipe(
        tap((newFilm: Film) => console.log(`Added film id = ${newFilm.id}`)),
        catchError(this.handleError<Film>('addFilm'))
    );
  }

  delete(id: number): Observable<Film> {
    const url = `${this.urlFilms}/${id}`;
    return this.http.delete<Film>(url, this.httpOptions).pipe(
        tap(_ => console.log(`Deleted film id = ${id}`)),
        catchError(this.handleError<Film>('deleteFilm'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
