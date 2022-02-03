import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './components/film/film.component';
import {FormsModule} from "@angular/forms";
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { DotToBracketPipe } from './pipes/dot-to-bracket.pipe';
import { PhaseCalculatorPipe } from './pipes/phase-calculator.pipe';
import { AppRoutingModule } from './modules/app-routing.module';
import { MarvelComponent } from './components/marvel/marvel.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        FilmComponent,
        FilmDetailsComponent,
        DotToBracketPipe,
        PhaseCalculatorPipe,
        MarvelComponent,
        DotToBracketPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
