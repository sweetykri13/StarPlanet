import { Component } from '@angular/core';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {
  planets: any[] = [];
  nextPage: string | null = null;
  currentPage: number = 1;
    previousPage: any;

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.loadPlanets();
  }

  loadPlanets() {
    this.planetService.getPlanets(this.currentPage).subscribe(
      (response: any) => {
        this.planets = response.planets;
        this.nextPage = response.nextPage;
      },
      (error) => {
        console.log('Error fetching planets:', error);
      }
    );
  }

  nextPageClicked() {
    if (this.nextPage) {
      this.currentPage++;
      this.loadPlanets();
    }
  }

previousPageClicked() {
  if (this.previousPage) {
    this.currentPage--;
    this.loadPlanets();
  }
}
}
