import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './components/film/film.component';
import {FormsModule} from "@angular/forms";
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { DotToBracketPipe } from './pipes/dot-to-bracket.pipe';
import { PhaseCalculatorPipe } from './pipes/phase-calculator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmDetailsComponent,
    DotToBracketPipe,
    PhaseCalculatorPipe
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
