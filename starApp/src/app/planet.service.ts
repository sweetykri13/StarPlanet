import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private apiUrl = 'https://swapi.dev/api/planets/';

  constructor(private http: HttpClient) { }


  getPlanets(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`).pipe(
      map((response: any) => {
        return {
          planets: response.results,
          nextPage: response.next
        };
      })
    );
  }
  getResidents(residentUrls: string): Observable<any> {
    return this.http.get<any>(residentUrls);
  }
}
