import { Component, inject, signal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ISelector } from '../../../core/interfaces/selector.interface';
import { MIDataStore } from '../../store/data.store';

@Component({
  selector: 'app-filter-dropdown',
  imports: [
    MatFormFieldModule, MatSelectModule, MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './filter-dropdown.component.html',
  styleUrl: './filter-dropdown.component.scss'
})
export class FilterDropdownComponent {
  readonly miStore = inject(MIDataStore);
  filters = signal<ISelector[]>([
    { value: 'NONE', viewValue: 'Select an option'},
    { value: 'ALL', viewValue: 'All'},
    { value: 'FAV', viewValue: 'Favorite'}
  ]);
  filter = new FormControl(this.miStore.filter());

  public onFilterSelected(): void {
    this.miStore.setFilter(this.filter.value || 'NONE');
  }
}
