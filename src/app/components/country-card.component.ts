import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-card',
  imports: [RouterLink],
  template: `
    @if(country(); as c) {
    <div
      class="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
    >
      <img
        class="w-full object-cover"
        [src]="c.flags.svg"
        [alt]="c.name.common"
      />
      <div class="p-6 pb-12">
        <h3 class="text-xl font-semibold">
          <a
            href="#"
            [routerLink]="['detail', c.cca2]"
            (click)="onSelect(c)"
            class="before:content-[''] before:absolute before:inset-0"
          >
            {{ c.name.common }}
          </a>
        </h3>
        <ul class="text-gray-600 mt-2">
          <li>Population: {{ c.population }}</li>
          <li>Region: {{ c.region }}</li>
          <li>Capital: {{ c.capital }}</li>
        </ul>
      </div>
    </div>
    }
  `,
  styles: `
    :host {
      max-width: 264px;
    }

    img {
      max-width: 264px;
      height: 160px;
      max-height: 160px;
    }
  `,
})
export class CountryCardComponent {
  country = input<any>();
  selected = output<any>();

  constructor() {}

  onSelect(country: any) {
    this.selected.emit(country);
  }
}
