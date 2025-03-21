import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { ButtonComponent } from '../components/button.component';

@Component({
  selector: '',
  imports: [ButtonComponent],
  template: `
    <button-link link="/" label="Back" class="pt-6" />

    <div class="flex flex-col gap-8 lg:flex-row lg:justify-between">
      @if(country(); as c) {
      <img
        class="w-full h-full object-cover rounded"
        [src]="c.flags.svg"
        [alt]="c.name.common"
      />

      <div class="lg:flex lg:flex-col lg:gap-8">
        <h1 class="text-2xl font-semibold">
          {{ c.name.common }}
        </h1>
        <div class="lg:flex w-100 lg:gap-[5rem]">
          <div class="flex flex-col gap-3">
            <ul class="text-gray-600 mt-2">
              <li>Native Name: {{ nativeName() }}</li>
              <li>Population: {{ c.population }}</li>
              <li>Region: {{ c.region }}</li>
              @if(c.subregion) {
              <li>Sub Region: {{ c.subregion }}</li>
              }
              <li>Capital: {{ c.capital }}</li>
            </ul>
          </div>

          <ul class="text-gray-600 mt-2">
            <li>Top Level Domain: {{ c.tld[0] }}</li>
            <li>Currencies: {{ currency() }}</li>
            <li>Languages: {{ languages() }}</li>
          </ul>
        </div>

        <div class="flex flex-col gap-3 w-full pt-20">
          <h2>Border Countries:</h2>

          <ul class="flex flex-wrap gap-4">
            @for(border of c.borders; track border) {
            <li>
              <button-link
                link="../{{ border }}"
                [label]="border"
                (click)="onSelect(border)"
              />
            </li>
            }
          </ul>
        </div>
      </div>
      }
    </div>
  `,
  styles: `
    :host{
      display: flex;
      flex-direction: column;
      gap: 2rem;

      img {
        max-height: 229px;

        @media (min-width: 768px) {
          max-width: 560px;
          max-height: 401px ;
        }
      }
    }
  `,
})
export class DetailPage implements OnInit {
  private readonly countriesService = inject(CountriesService);
  private readonly route = inject(ActivatedRoute);

  readonly country = this.countriesService.selectedCountry;
  readonly nativeName = computed(
    () => (Object.values(this.country().name.nativeName)[0] as any).common
  );
  readonly currency = computed(
    () => (Object.values(this.country().currencies)[0] as any).name
  );
  readonly languages = computed(() =>
    (Object.values(this.country().languages) as any).join(',')
  );

  ngOnInit() {
    const cca3 = this.route.snapshot.paramMap.get('id');
    if (cca3) {
      this.countriesService.findCountryByCCA3(cca3);
    }
  }

  onSelect(cca3: string) {
    this.countriesService.findCountryByCCA3(cca3);
  }
}
