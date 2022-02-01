import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FilmComponent } from "../components/film/film.component";
import { MarvelComponent } from "../components/marvel/marvel.component";
import { FilmDetailsComponent } from "../components/film-details/film-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FilmComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'detail/:id', component: FilmDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
