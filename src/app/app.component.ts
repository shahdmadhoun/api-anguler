import { Component } from '@angular/core';
import citysData from './citys.json';
import stationsData from './stations.json'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  citys: city[] = citysData;
  stations: station[] = stationsData;
  cityCode = "city code";

  choose() {
    this.cityCode = cityCode;
  }
}