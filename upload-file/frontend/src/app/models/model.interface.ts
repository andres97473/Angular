export interface CountryI {
  id: number;
  name: string;
  cities?: any;
}

export interface CityI {
  id: number;
  name: string;
  id_country: number;
}

export interface CountryCityI {
  id: number;
  name: string;
  cities: CityI[];
}
