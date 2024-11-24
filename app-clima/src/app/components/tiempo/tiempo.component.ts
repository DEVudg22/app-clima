import { Component, Input, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-tiempo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tiempo.component.html',
  styleUrl: './tiempo.component.css',
})
export class TiempoComponent {
  @Input() ciudad: string = '';
  weatherService = Inject(WeatherService);
  clima: any;

  public getWeather(ciudad: string) {
    this.weatherService.getCity(ciudad).subscribe((datos: any) => {
      this.clima = datos;
      console.log(this.clima);
    });
  }
}
