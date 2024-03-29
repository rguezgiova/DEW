import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './components/film/film.component';
import { FormsModule } from "@angular/forms";
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { DotToBracketPipe } from './pipes/dot-to-bracket.pipe';
import { PhaseCalculatorPipe } from './pipes/phase-calculator.pipe';
import { AppRoutingModule } from './modules/app-routing.module';
import { MarvelComponent } from './components/marvel/marvel.component';
import {HttpClientModule} from "@angular/common/http";
import { UnreleasedFilmPipe } from './pipes/unreleased-film.pipe';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@NgModule({
    declarations: [
        AppComponent,
        FilmComponent,
        FilmDetailsComponent,
        DotToBracketPipe,
        PhaseCalculatorPipe,
        MarvelComponent,
        DotToBracketPipe,
        UnreleasedFilmPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
