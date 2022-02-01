import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeekStatsModule } from './week-stats/week-stats.module';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => WeekStatsModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
