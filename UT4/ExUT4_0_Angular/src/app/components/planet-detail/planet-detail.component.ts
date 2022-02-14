import { Component, OnInit } from '@angular/core';
import { Planet } from "../planet/planet";
import { PlanetService } from "../../services/planet.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  planet?: Planet;

  /**
   * Función que obtiene una película según su id
   */
  getPlanet(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.planetService.getPlanet(name).subscribe(planet => this.planet = planet);
  }

  constructor(private route: ActivatedRoute, private planetService: PlanetService, private location: Location) { }

  ngOnInit(): void {
    this.getPlanet();
  }

}
