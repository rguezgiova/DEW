import { Component, OnInit } from '@angular/core';
import { Planet } from "./planet";
import { PlanetService } from "../../services/planet.service";

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planets: Planet[] = [];

  getPlanets() {
    this.planets = this.planetService.planets;
    this.planetService.getPlanets();
  }

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.getPlanets();
  }
}
