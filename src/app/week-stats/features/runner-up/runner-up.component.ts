import { Component, Input, OnInit } from '@angular/core';
import { IAwardsMaster } from '../../interfaces/istats';

@Component({
  selector: 'app-runner-up',
  templateUrl: './runner-up.component.html',
  styleUrls: ['./runner-up.component.scss']
})
export class RunnerUpComponent implements OnInit {

  @Input() data: IAwardsMaster = {};
  @Input() icon: string = "";

  categories = [
    {
      category: "IR_up", 
      title: "Most IR gained"
    }, 
    {
      category: "IR_down", 
      title: "Most IR lost"
    }, 
    {
      category: "SR_up", 
      title: "Most SR gained"
    }, 
    {
      category: "SR_down", 
      title: "Most SR lost"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getClass(s: string|number): string {
    if (typeof s === 'string'){
      return "license-" + s.charAt(0);
    }
    return "rating"
  }

}
