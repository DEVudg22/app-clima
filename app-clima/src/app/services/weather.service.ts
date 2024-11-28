import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  apiKey: string = '39ce8d413c5974b092ec0bf5fa2fbe2a';
  URL: string = 'https://api.openweathermap.org/data/2.5/weather?';

  cityWeather(city: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=es`
    );
  }
}
