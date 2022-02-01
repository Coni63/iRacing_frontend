import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent implements OnInit {

  @Input() data: any;
  @Input() title: string = "";
  @Input() icon: string = "";
  @Input() tootipText: string = "";
  @Input() deltaText = ""

  constructor() { }

  ngOnInit(): void {
  }

}
