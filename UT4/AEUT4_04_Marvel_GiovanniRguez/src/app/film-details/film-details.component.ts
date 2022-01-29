import {Component, Input, OnInit} from '@angular/core';
import { Film } from "../film/film";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  readMore = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Decorador Imput con el valor del componente padre
   */
  @Input() film?: Film;
}
