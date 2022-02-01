import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeekStatsModule } from './week-stats/week-stats.module';
import { MaterialsModule } from './materials/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialsModule,
    WeekStatsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
