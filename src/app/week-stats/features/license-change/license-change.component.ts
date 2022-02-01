import { Component, Input, OnInit } from '@angular/core';
import { dataTool } from 'echarts';
import { ILicense, ILicenseMaster } from '../../interfaces/istats';

@Component({
  selector: 'app-license-change',
  templateUrl: './license-change.component.html',
  styleUrls: ['./license-change.component.scss']
})
export class LicenseChangeComponent implements OnInit {

  @Input() data: ILicenseMaster = {};
  categories: string[] = ["D", "C", "B", "A", "P"]

  constructor() { }

  ngOnInit(): void {  }

}
