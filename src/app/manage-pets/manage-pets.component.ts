import { Component, inject, OnInit } from '@angular/core';
import { FilterDropdownComponent } from '../manage-items/mi-toolbar/filter-dropdown/filter-dropdown.component';
import { EMPTY_STATE_MESSAGES } from '../core/tokens/empty-state-messages.token';
import { FILTER_OPT_DROPDOWN } from '../core/tokens/filter-options.token';

@Component({
  selector: 'app-manage-pets',
  imports: [FilterDropdownComponent],
  templateUrl: './manage-pets.component.html',
  styleUrl: './manage-pets.component.scss'
})
export class ManagePetsComponent implements OnInit {
  readonly emptyMessage = inject(EMPTY_STATE_MESSAGES);
  message = '';

  ngOnInit(): void {
    this.message = this.emptyMessage('ALL');
  }

  setFilterSelected(filter: string): void {
    this.message = this.emptyMessage(filter);
  }
}
