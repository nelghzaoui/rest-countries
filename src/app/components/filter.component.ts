import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'filter-region',
  template: `
    <mat-form-field class="w-half lg:w-auto" appearance="outline">
      <mat-select
        placeholder="Filter By Region"
        (selectionChange)="onChange($event)"
      >
        @for (region of regions; track region) {
        <mat-option [value]="region">
          {{ region }}
        </mat-option>
        }
      </mat-select>
    </mat-form-field>
  `,
  styles: ``,
  imports: [MatSelectModule, ReactiveFormsModule],
})
export class FilterRegionComponent {
  regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  regionControl = new FormControl('');
  selected = output<string>();

  onChange(event: MatSelectChange) {
    this.selected.emit(event.value);
  }
}
