import { Injectable } from '@angular/core';
import { CityI, CountryI } from '../models/model.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private countries: CountryI[] = [
    { id: 1, name: 'Colombia' },
    { id: 2, name: 'España' },
  ];

  private cities: CityI[] = [
    { id: 1, name: 'Pasto', id_country: 1 },
    { id: 2, name: 'Cali', id_country: 1 },
    { id: 3, name: 'Bogota', id_country: 1 },
    { id: 4, name: 'Medellin', id_country: 1 },
    { id: 5, name: 'Madrid', id_country: 2 },
    { id: 6, name: 'Barcelona', id_country: 2 },
    { id: 7, name: 'Valencia', id_country: 2 },
  ];

  constructor() {}

  getCountries(): CountryI[] {
    return this.countries;
  }

  getCities(): CityI[] {
    return this.cities;
  }
}
