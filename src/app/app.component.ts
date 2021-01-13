import { Component } from '@angular/core';
import citysData from './citys.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  citys: city[] = citysData;
  cityCode = 'city code';
}