import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tiempo',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './tiempo.component.html',
  styleUrl: './tiempo.component.css',
})
export class TiempoComponent {
  @Input() ciudad: string = '';
  clima: any;
  img: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  getWeather() {
    this.weatherService.cityWeather(this.ciudad).subscribe((datos) => {
      this.clima = datos;
    });
  }
}
