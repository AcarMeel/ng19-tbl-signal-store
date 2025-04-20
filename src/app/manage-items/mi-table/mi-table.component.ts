import { Component, inject, effect, EffectRef, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import { MIDataStore } from '../store/data.store';
import { IItem } from '../../core/interfaces/item.interface';
import { CommonModule } from '@angular/common';
import { EMPTY_STATE_MESSAGES } from '../../core/tokens/empty-state-messages.token';


@Component({
  selector: 'app-mi-table',
  imports: [MatTableModule, MatCheckboxModule, CommonModule, MatSortModule],
  templateUrl: './mi-table.component.html',
  styleUrl: './mi-table.component.scss'
})
export class MiTableComponent implements AfterViewInit {
  readonly miStore = inject(MIDataStore);
  readonly emptyMessage = inject(EMPTY_STATE_MESSAGES);
  selection = new SelectionModel<IItem>(true, []);
  dataSource = new MatTableDataSource<IItem>([]);
  filterSelected = '';
  totalResults = 0;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  effect: EffectRef = effect(() => {
    const data = this.miStore.data()
    this.dataSource.data = data;
  });

  effectTotal: EffectRef = effect(() => {
    const count = this.miStore.totalResults();
    const filterName = this.miStore.filter();
    this.filterSelected = filterName;
    this.totalResults = count;
  });

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.miStore.totalResults();
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.miStore.setSelectedRows([]);
      return;
    }

    this.selection.select(...this.dataSource.data);
    this.miStore.setSelectedRows(this.selection.selected);
  }

  toggleSingleRow(row: IItem) {
    this.selection.toggle(row);
    this.miStore.setSelectedRows(this.selection.selected);
  }

  checkboxLabel(row?: IItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name}`;
  }

}
