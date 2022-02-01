import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { IStats, IWeekMaster } from '../interfaces/istats';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) {
  }

  getDefault(): IStats {
    return {
      "racesDone" : {
        "value": 0,
        "delta": 0
      },
      "newRacers" : {
        "value": 0,
        "delta": 0
      },
      "lapsDone" : {
        "value": 0,
        "delta": 0
      },
      "avgInc" : {
        "value": 0,
        "delta": 0
      },
      "licenseChange": {
        "D": {
          "total": 0,
          "promoted": 0,
          "demoted": 0
        },
        "C": {
          "total": 0,
          "promoted": 0,
          "demoted": 0
        },
        "B": {
          "total": 0,
          "promoted": 0,
          "demoted": 0
        },
        "A": {
          "total": 0,
          "promoted": 0,
          "demoted": 0
        },
        "P": {
          "total": 0,
          "promoted": 0,
          "demoted": 0
        }
      },
      "awards": {
        IR_up: {
          "name": "",
          "from": "",
          "to": ""
        },
        IR_down: {
          "name": "",
          "from": "",
          "to": ""
        },
        SR_up: {
          "name": "",
          "from": "",
          "to": ""
        },
        SR_down: {
          "name": "",
          "from": "",
          "to": ""
        }
      },
      avgIR: {
        "value": 0,
        "delta": 0
      },
      avgTT: {
        "value": 0,
        "delta": 0
      },
      country: {},
      dist: {}
    }
  };

  public getData(file: string): Promise<IStats>{
    return firstValueFrom(this.http.get<IStats>(`assets/data/${file}`));
  }

  public getInputs(): Promise<IWeekMaster>{
    return firstValueFrom(this.http.get<IWeekMaster>(`assets/data/weeks.json`));
  }


}
