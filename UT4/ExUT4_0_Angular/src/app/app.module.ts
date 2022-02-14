import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import {FormsModule} from "@angular/forms";
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { RouterModule } from "@angular/router";
import { RotationPeriodPipe } from './pipes/rotation-period.pipe';
import { OrbitalPeriodPipe } from './pipes/orbital-period.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetDetailComponent,
    RotationPeriodPipe,
    OrbitalPeriodPipe
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
