import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WeekStatsRoutingModule } from './week-stats-routing.module';

import { MaterialsModule } from '../materials/materials.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';

import { MainLayoutComponent } from './features/main-layout/main-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BaseCardComponent } from './features/base-card/base-card.component';
import { LicenseChangeComponent } from './features/license-change/license-change.component';
import { WeekFormComponent } from './features/week-form/week-form.component';
import { RunnerUpComponent } from './features/runner-up/runner-up.component';
import { DistIrComponent } from './features/dist-ir/dist-ir.component';
import { MapDriverComponent } from './features/map-driver/map-driver.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainLayoutComponent,
    BaseCardComponent,
    LicenseChangeComponent,
    WeekFormComponent,
    RunnerUpComponent,
    DistIrComponent,
    MapDriverComponent
  ],
  imports: [
    CommonModule,
    WeekStatsRoutingModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LeafletModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class WeekStatsModule { }
