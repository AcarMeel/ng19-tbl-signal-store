import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ISelector } from '../../../core/interfaces/selector.interface';
import { FILTER_OPT_DROPDOWN } from '../../../core/tokens/filter-options.token';

@Component({
  selector: 'app-filter-dropdown',
  imports: [
    MatFormFieldModule, MatSelectModule, MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './filter-dropdown.component.html',
  styleUrl: './filter-dropdown.component.scss'
})
export class FilterDropdownComponent implements OnInit {
  readonly filterOptions = inject(FILTER_OPT_DROPDOWN);
  defaultFilterSelected = input<string>('');
  filterParam = input<string>('');
  totalResults = input<number>(0);
  filters = signal<ISelector[]>([]);
  filterControl = new FormControl<string>('');
  filterChange = output<string>();

  ngOnInit(): void {
    this.filters.set(this.filterOptions(this.filterParam()));
    this.filterControl.setValue(this.defaultFilterSelected());
  }

  public onFilterSelected(): void {
    this.filterChange.emit(this.filterControl.value || '');
  }
}
