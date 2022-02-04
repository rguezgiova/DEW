import { Injectable } from '@angular/core';
import { Film } from "../components/film/film";
import { HttpClient } from "@angular/common/http";
import { FetchData } from "../interfaces/fetch-data";
import { Observable, of } from "rxjs";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  urlFilms = 'https://mcuapi.herokuapp.com/api/v1/movies';
  films: Film[] = [];

  /**
   * Función que recoge el listado de películas
   */
  getFilms() {
     this.http.get<FetchData>(this.urlFilms).subscribe(data => {
      data.data.forEach(element => {
        let url: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(element.trailer_url);
        let film = new Film(element.id, element.title, element.cover_url, element.release_date, element.overview, url);
        this.films.push(film);
      });
    });
  }

  /**
   * Función que busca un elemento según su id
   * @param id del elemento a buscar
   */
  getFilm(id: number): Observable<Film> {
    const film = this.films.find(f => f.id === id)!;
    return of(film)
  }

  /**
   * Función que actualiza una película
   * @param film a actualizar
   */
  update(film: Film) {
    this.films.find(element => film == element);
    this.films.pop();
    this.films.push(film);
  }

  /**
   * Función que añade una película
   * @param film a añadir
   */
  add(film: Film) {
    if (this.films.find(element => element === film)) {
      alert('La película que intenta añadir ya existe');
    } else  {
      this.films.push(film);
      alert('Se ha añadido correctamente ' + film.name);
    }
  }

  /**
   * Función que borra una película según su id
   * @param id de la película a borrar
   */
  delete(id: number) {
    if (this.films.find(element => id == element.id)) {
      alert('La película con id ' + id + ' se ha eliminado correctamente');
    } else {
      alert('La id ' + id + ' no se encuentra en la lista');
    }
  }

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
}
