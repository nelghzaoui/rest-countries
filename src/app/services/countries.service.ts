import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly http = inject(HttpClient);
  readonly countries = signal<any[]>([]);
  readonly selectedCountry = signal<any>(null);

  constructor() {
    this.loadCountries();
  }

  private loadCountries(): void {
    this.http
      .get<any[]>('https://restcountries.com/v3.1/all')
      .pipe(take(1))
      .subscribe((countries) => this.countries.set(countries));
  }
}
