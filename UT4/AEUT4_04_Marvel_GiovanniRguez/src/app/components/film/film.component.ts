import { Component, OnInit } from '@angular/core';
import { Film } from "./film";
import { FilmService } from "../../services/film.service";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-film',
  templateUrl: 'film.component.html',
  styleUrls: ['film.component.css']
})
export class FilmComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  /**
   * Función que recoge el listado de películas
   */
  getFilms() {
    this.films = this.filmService.films;
    this.filmService.getData();
  }

  /**
   *
  add() {
    this.filmService.add(this.newFilm);
  }
   */
}
