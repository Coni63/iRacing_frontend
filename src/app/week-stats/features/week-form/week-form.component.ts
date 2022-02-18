import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IWeek, IWeekMaster } from '../../interfaces/istats';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-week-form',
  templateUrl: './week-form.component.html',
  styleUrls: ['./week-form.component.scss']
})
export class WeekFormComponent implements OnInit {

  // @Input() inputs: IWeekMaster|null = null;
  @Input() inputs: IWeekMaster|null = null;
  @Output() onWeekChange = new EventEmitter<string>();
  @Output() onModeChange = new EventEmitter<boolean>();

  selectedMode: string = "Road";
  selectedWeek: string = "";

  constructor() { }

  ngOnInit(): void {
    if(isDevMode()) {
      setTimeout(() => { this.onWeekChange.emit("Road_20220111_20220118.json") }, 500);
    }
  }

  changeMode(event: any){
    this.selectedMode = event.value;
    if (this.selectedWeek == ""){
      this.onModeChange.emit(true);
    } else {
      const filename = `${this.selectedMode}_${this.selectedWeek}.json`;
      this.onWeekChange.emit(filename);
    }
  }

  changeWeek(event: any){
    this.selectedWeek = event.value;
    const filename = `${this.selectedMode}_${this.selectedWeek}.json`;
    this.onWeekChange.emit(filename);
  }

}
