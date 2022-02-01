import { Component, OnInit } from '@angular/core';
import { Film } from "./film";
import { FILMS } from "../../mocks/mock-film";
import { FilmService } from "../../services/film.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  edit = false;

  selectedFilm: Film = new Film();

  films: Film[] = [];

  add() {
    if (!this.edit) {
      this.films.push(this.selectedFilm);
    }
    this.selectedFilm = new Film();
    this.edit = false;
  }

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getFilms().subscribe({
      next: films => {
        this.films = films;
      }
    })
  }
}
