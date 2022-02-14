import { Injectable } from '@angular/core';
import { Planet } from "../components/planet/planet";
import { FetchData } from "../interfaces/fetch-data";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  urlPlanets = 'https://swapi.dev/api/planets/';
  planets: Planet[] = [];

  /**
   * Función que recoge la lista de Planetas
   */
  getPlanets() {
    this.http.get<FetchData>(this.urlPlanets).subscribe(data => {
      data.results.forEach(element => {
        let planet = new Planet(element.name, element.rotation_period, element.orbital_period, element.climate, element.gravity, element.terrain, element.surface_water);
        this.planets.push(planet);
      });
    });
  }

  /**
   * Función que busca un planeta según su nombre
   * @param name del planeta
   */
  getPlanet(name: string): Observable<Planet> {
    const planet = this.planets.find(planet => planet.name = name)!;
    return of(planet);
  }

  constructor(private http: HttpClient) { }
}
