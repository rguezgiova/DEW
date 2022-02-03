import {Component, Input, OnInit} from '@angular/core';
import { Film } from "../film/film";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
  selectedFilm: Film = new Film();

  select(film: Film): void {
    this.selectedFilm = film;
    this.edit = true;
  }

  delete(id: number) {
    this.filmService.delete(id);
  }

  update(film: Film): void {
    this.filmService.update(film)
  }

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

  /**
   * Decorador Imput con el valor del componente padre
   */
  @Input() film?: Film;
}
