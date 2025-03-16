import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'filter-region',
  template: `
    <mat-form-field class="w-half lg:w-auto" appearance="outline">
      <mat-select placeholder="Filter By Region">
        @for (region of regions; track region) {
        <mat-option [value]="region">{{ region }}</mat-option>
        }
      </mat-select>
    </mat-form-field>
  `,
  styles: ``,
  imports: [MatSelectModule],
})
export class FilterRegionComponent {
  regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
}
