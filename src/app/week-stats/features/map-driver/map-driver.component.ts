import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
import { ICountry } from '../../interfaces/istats';

@Component({
  selector: 'app-map-driver',
  templateUrl: './map-driver.component.html',
  styleUrls: ['./map-driver.component.scss']
})
export class MapDriverComponent implements OnInit {

  // @Input() data: ICountry = {};
  @Input() set data(data: ICountry) {
    this.count = data;
    this.updateStyleMap();
  }

  public countryCode: string = "";
  public numberRacers: number = 0;
  public count: ICountry = {}
  public layers: any[];
  public selectedLegendInfos: number[];
  public selectedLegendColorGradient: string[];
  public options: any = {
    layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 5,
        })
    ],
    zoom: 1,
    center: latLng(30, 0)
  };
  STYLE_INITIAL = {
    color: '#4974ff',
    fillOpacity: 0.7,
    weight: 2
  };

  STYLE_HOVER = {
      weight: 5,
      color: 'white'
  };

  constructor(private http: HttpClient, private ref: ChangeDetectorRef) { 
    this.layers = [];
    this.selectedLegendInfos = [];
    this.selectedLegendColorGradient = [
        '#ff0000',
        '#ff2e2e',
        '#ff6363',
        '#ff8181',
        '#ffb8b8',
        '#ffdcdc',
    ];
  }

  // https://deeplylearning.fr/cours-pratiques-data-visualization/integration-de-leaflet-dans-angular-9-carte-choroplethe/

  ngOnInit(): void {
    
    this.http.get('assets/country_shapes_clean.geojson').subscribe((json: any) => {
      this.layers.push(
        L.geoJSON(json, {
          style: this.STYLE_INITIAL,
          onEachFeature: (feature, layer) => {
            layer.on('mouseover', (e) => this.highlightFeature(e));
            layer.on('mouseout', (e) => this.resetHighlight(e));
            //layer.on('click', (e) => this.zoomToFeature(e));
          }
        })
      )
    });

    console.log("something to delete later");
    setTimeout(() => { 
      this.countryCode = "FR";
      this.numberRacers = 10000
    }, 500);
  }

  public highlightFeature(e: any): void {
    const layer = e.target;
    this.countryCode = layer.feature.properties.iso2;
    this.numberRacers = this.count[this.countryCode] | 0;
    layer.setStyle(this.STYLE_HOVER);
    this.ref.detectChanges();
  }

  private resetHighlight(e: any): void {
    this.layers[0].setStyle(this.STYLE_INITIAL);
    this.countryCode = "";
    this.numberRacers = 0;
    this.ref.detectChanges();
  }

  public updateStyleMap(): void {
    if (this.layers.length == 0){
      return;
    }

    if (Object.keys(this.count).length === 0){
      this.layers[0].setStyle({
        fillColor: '#4974ff',
        fillOpacity: 0.7,
        weight: 2
      });
      this.selectedLegendInfos = [];
      return;
    }

    this.updateLegendValues();
    this.layers[0].eachLayer((currentRegion: any) => {
        let code = currentRegion.feature.properties.iso2;
        let count = this.count[code] | 0;
        currentRegion.setStyle({
            fillColor: this.getColor(count), // a passer avec un lien vers l'iso2
            fillOpacity: 0.7,
            weight: 2
        });
    });
  }

  private getColor(value: number) {
    return value > this.selectedLegendInfos[0] ? this.selectedLegendColorGradient[0] :
        value > this.selectedLegendInfos[1] ? this.selectedLegendColorGradient[1] :
        value > this.selectedLegendInfos[2] ? this.selectedLegendColorGradient[2] :
        value > this.selectedLegendInfos[3] ? this.selectedLegendColorGradient[3] :
        value > this.selectedLegendInfos[4] ? this.selectedLegendColorGradient[4] :
        this.selectedLegendColorGradient[5];
  }

  private updateLegendValues(): void {
    let maxValue = Math.log10(Math.max(...Object.values(this.count)));
    let tick = maxValue / 7;

    this.selectedLegendInfos = [
        Math.round(Math.pow(10, 6 * tick)),
        Math.round(Math.pow(10, 5 * tick)),
        Math.round(Math.pow(10, 4 * tick)),
        Math.round(Math.pow(10, 3 * tick)),
        Math.round(Math.pow(10, 2 * tick)),
        Math.round(Math.pow(10, 1 * tick)),
    ];
  }

}
