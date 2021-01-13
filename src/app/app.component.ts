import { Component } from '@angular/core';
import { MapsService } from './maps.service';
import { google } from '@google/maps';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Google Maps Example';

 
  lat: string = '';
  lng: string = '';
  location: object;

  constructor(private map: MapsService) {

    this.location = Object;
  }
     ngOnInit() {
       this.map.getLocation().subscribe( data => {
         console.log(data);
         this.lat = data.latitude;
         this.lng = data.longitude;
       });
     }
  
  


}