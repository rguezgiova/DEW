import { Component, OnInit } from '@angular/core';
import { Film } from "./film";
import { FilmService } from "../../services/film.service";

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

  getFilms(): void {
    this.filmService.getFilms().subscribe({
      next: films => {
        this.films = films;
      }
    })
  }

  add(film: Film) {
    this.filmService.add(film);
  }
}
