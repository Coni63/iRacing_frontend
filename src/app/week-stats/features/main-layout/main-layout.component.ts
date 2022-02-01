import { Component, OnInit } from '@angular/core';
import { IStats, IWeekMaster } from '../../interfaces/istats';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  selectedData: IStats;
  allInputs: IWeekMaster|null = null;

  constructor(private statsService: StatsService) { 
    this.selectedData = this.statsService.getDefault();
  }

  ngOnInit(): void {
    this.statsService.getInputs().then((data: IWeekMaster) => {
      this.allInputs = data;
    });
  }

  updateData(event: string){ // the event contains the filename to load
    this.statsService.getData(event).then((data: IStats) => {
      this.selectedData = data;
    }); 
  }

  resetData(event: boolean){
    this.selectedData = this.statsService.getDefault();
  }
}
