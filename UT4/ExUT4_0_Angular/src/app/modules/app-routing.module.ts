import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PlanetComponent } from "../components/planet/planet.component";
import { PlanetDetailComponent } from "../components/planet-detail/planet-detail.component";

/**
 * Módulo de la app encargado de realizar las redirecciones de la misma
 */
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PlanetComponent },
  { path: 'detail/:name', component: PlanetDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
