import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import {FormsModule} from "@angular/forms";
import { FilmDetailsComponent } from './film-details/film-details.component';
import { DotToBracketPipe } from './dot-to-bracket.pipe';
import { PhaseCalculatorPipe } from './phase-calculator.pipe';

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
