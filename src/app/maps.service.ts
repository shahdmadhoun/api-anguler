import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface location {
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<location>('https://ipgeolocation.abstractapi.com/v1/?api_key=272404a4548044aeb7086d7fda783147');
  }
}
