import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly http = inject(HttpClient);
  countries$: Observable<any[]> = this.getCountries();
  private readonly countriesSubject$ = new BehaviorSubject<any[]>([]);

  private getCountries(): Observable<any[]> {
    const apiUrl = 'https://restcountries.com/v3.1/all';

    if (!this.countriesSubject$) {
      return this.http.get<any[]>(apiUrl).pipe(
        tap((countries) => {
          this.countriesSubject$.next(countries);
        })
      );
    }

    return this.countriesSubject$.asObservable();
  }
}
