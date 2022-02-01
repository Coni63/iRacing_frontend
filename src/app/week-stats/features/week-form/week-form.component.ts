import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IWeek, IWeekMaster } from '../../interfaces/istats';

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

  selectedMode:string = "Road"

  constructor() { }

  ngOnInit(): void {
    console.log("something to delete later");
    setTimeout(() => { this.onWeekChange.emit("Road_20220111_20220118.json") }, 500);
  }

  changeMode(event: any){
    this.selectedMode = event.value;
    this.onModeChange.emit(true);
  }

  loadData(event: any){
    this.onWeekChange.emit(event.value);
  }

}
