import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'search-bar',
  imports: [MatInputModule, MatIconModule, ReactiveFormsModule],
  template: `
    <mat-form-field class="w-full lg:w-auto" appearance="outline">
      <mat-icon fontIcon="search" color="primary"></mat-icon>

      <input
        placeholder="Search for a country..."
        matInput
        type="search"
        [formControl]="searchControl"
      />
    </mat-form-field>
  `,
  styles: `
    ::ng-deep .mat-mdc-text-field-wrapper {
      background-color: white !important;
      border:1px solid white;
      border-radius:4px !important;
      padding:0 2rem !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    ::ng-deep .mdc-notched-outline__leading,
    ::ng-deep .mdc-notched-outline__trailing {
      display: none !important;
    }

    :host ::ng-deep .mat-mdc-form-field-infix {
      display: flex;
      gap: 0.5rem;
    }
  `,
})
export class SearchBarComponent implements OnInit, OnDestroy {
  search = output<string>();
  searchControl = new FormControl('');
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((value) => this.search.emit(value ?? ''));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
