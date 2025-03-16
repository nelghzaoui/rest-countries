import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'country-card',
  template: `
    <div
      class="bg-white rounded-xl shadow-lg"
      (click)="onCountrySelected(country)"
    >
      <img
        class="w-full object-cover shadow-md"
        [src]="country().flags.svg"
        [alt]="country().name.common"
      />
      <div class="p-4">
        <h3 class="text-xl font-semibold">{{ country().name.common }}</h3>
        <ul class="text-gray-600 mt-2">
          <li>Population: {{ country().population }}</li>
          <li>Region: {{ country().region }}</li>
          <li>Capital: {{ country().capital }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: `

    :host {
      max-width: 264px;
    }

    img {
      max-width: 264px;
      height: 160px;
    }
  `,
})
export class CountryCardComponent {
  country = input<any>();
  @Output() countrySelected = new EventEmitter<any>();

  constructor() {}

  onCountrySelected(country: any) {
    this.countrySelected.emit(country);
  }
}
