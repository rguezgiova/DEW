import { Component, OnInit } from '@angular/core';
import { Film } from "./film";
import { FILMS } from "./mock-film";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  edit = false;

  films = FILMS;

  selectedFilm: Film = new Film();

  select(film: Film): void {
    this.selectedFilm = film;
    this.edit = true;
  }

  delete(film: Film) {
    this.films = this.films.filter(f => f != film);
    this.selectedFilm = new Film();
  }

  addOrEdit() {
    if (!this.edit) {
      this.films.push(this.selectedFilm);
    }
    this.selectedFilm = new Film();
    this.edit = false;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
