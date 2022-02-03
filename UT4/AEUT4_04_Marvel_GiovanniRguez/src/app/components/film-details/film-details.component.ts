import { Component, OnInit } from '@angular/core';
import { Film } from "../film/film";
import { ActivatedRoute } from '@angular/router';
import { FilmService } from "../../services/film.service";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  edit = false;
  readMore = false;
  films: Film[] = [];
  film?: Film

  /**
   * Función que eliminar una película según su id
   * @param id de la película a eliminar
   */
  delete(id: number) {
    this.filmService.delete(id);
  }

  /**
   * Función que actualiza una película
   * @param film de la película a actualizar
   */
  update(film: Film) {
    this.filmService.update(film)
  }

  /**
   * Función que obtiene una película según su id
   */
  getFilm(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.filmService.getFilm(id).subscribe(film => this.film = film);
  }

  constructor(
    private  route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFilm();
  }
}
