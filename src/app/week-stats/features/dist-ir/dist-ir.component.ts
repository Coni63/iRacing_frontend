import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
import { IDist, IDistMaster } from '../../interfaces/istats';

@Component({
  selector: 'app-dist-ir',
  templateUrl: './dist-ir.component.html',
  styleUrls: ['./dist-ir.component.scss']
})
export class DistIrComponent implements OnInit {

  // @Input() inputs: IDistMaster|null = null;
  @Input()set data(data: IDistMaster) {
    this.distrib = data;
    this.updatePlot();
  }
  chartInstance: ECharts|null = null;
  selectedMode = "IRating";
  isLoading = false;
  distrib: IDistMaster = {};

  chartOption: EChartsOption = { // https://echarts.apache.org/en/option.html
    
    series: []
  };

  constructor() { }

  ngOnInit(): void {
  }

  onChartInit(e: ECharts) {
    this.chartInstance = e;
  }

  private updatePlotWithCategory(values: IDist){
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['D', 'C', 'B', 'A', 'P']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: values["xAxis"]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'D',
          type: 'line',
          stack: 'counts',
          areaStyle: {
            // color: "#00FF00",
            opacity: 0.5,
          },
          data: values["D"]
        },
        {
          name: 'C',
          type: 'line',
          stack: 'counts',
          areaStyle: {
            // color: "#00FF00",
            opacity: 0.5,
          },
          data: values["C"]
        },
        {
          name: 'B',
          type: 'line',
          stack: 'counts',
          areaStyle: {
            // color: "#00FF00",
            opacity: 0.5,
          },
          data: values["B"]
        },
        {
          name: 'A',
          type: 'line',
          stack: 'counts',
          areaStyle: {
            // color: "#00FF00",
            opacity: 0.5,
          },
          data: values["A"]
        },
        {
          name: 'P',
          type: 'line',
          stack: 'counts',
          areaStyle: {
            // color: "#00FF00",
            opacity: 0.5,
          },
          data: values["P"]
        },
      ]
    }
  }

  private updatePlotWithPercent(values: IDist){
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['%']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: values["xAxis"]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '%',
          type: 'line',
          stack: 'counts',
          areaStyle: {
            // color: "#00FF00",
            opacity: 0.5,
          },
          data: values["percent"]
        }
      ]
    }
  }

  private updatePlot(){
    if (Object.keys(this.distrib).length === 0){
      return;
    }

    if (this.chartInstance != null) {

      let option = {};
      if (this.selectedMode.endsWith("Percent")){
        console.log(this.selectedMode)
        option = this.updatePlotWithPercent(this.distrib[this.selectedMode]);
      } else {
        option = this.updatePlotWithCategory(this.distrib[this.selectedMode]);
      }

      this.chartInstance.clear();
      this.chartInstance.setOption(option, {
          notMerge: false,
          lazyUpdate: false,
          silent: false
      });
    }
  }

  changeMode(event: any){
    this.selectedMode = event.value;
    this.updatePlot();
  }

}
