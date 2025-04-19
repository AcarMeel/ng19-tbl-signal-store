import { Component, input, OnInit, output, signal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ISelector } from '../../../core/interfaces/selector.interface';

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
  defaultFilterSelected = input<string>('');
  totalResults = input<number>(0);
  filters = signal<ISelector[]>([
    { value: 'NONE', viewValue: 'Select an option'},
    { value: 'ALL', viewValue: 'All'},
    { value: 'FAV', viewValue: 'Favorite'}
  ]);
  filterControl = new FormControl<string>('');
  filterChange = output<string>();

  ngOnInit(): void {
    this.filterControl.setValue(this.defaultFilterSelected());
  }

  public onFilterSelected(): void {
    this.filterChange.emit(this.filterControl.value || '');
  }
}
