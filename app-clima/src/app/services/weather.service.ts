import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey: string = '39ce8d413c5974b092ec0bf5fa2fbe2a';
  URL: string = '';
  constructor(private http: HttpClient) {
    this.URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=sp&appid=${this.apiKey}&q=`;
  }

  public getCity(city: string) {
    return this.http.get<any>(`${this.URL}${city}`);
  }
}
