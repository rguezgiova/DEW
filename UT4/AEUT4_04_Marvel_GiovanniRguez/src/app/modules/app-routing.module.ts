import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FilmComponent } from "../components/film/film.component";
import { MarvelComponent } from "../components/marvel/marvel.component";

const routes: Routes = [
    { path: 'home', component: FilmComponent },
    { path: 'marvel', component: MarvelComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
