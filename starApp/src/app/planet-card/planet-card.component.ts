import { Component, Input } from '@angular/core';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent {
  @Input() planet: any;
  resData: any[] = [];

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.fetchResidentsData();
  }

  fetchResidentsData(): void {
    if (this.planet.residents && this.planet.residents.length > 0) {
      this.planetService.getResidents(this.planet.residents).subscribe(res => {
        this.resData = res;
      });
    }
  }
}
