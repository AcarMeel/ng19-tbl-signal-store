import { Component, inject, effect, EffectRef, ViewChild, AfterViewInit, signal, computed } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MIDataStore } from '../store/data.store';
import { IItem } from '../../core/interfaces/item.interface';
import { CommonModule } from '@angular/common';
import { EMPTY_STATE_MESSAGES } from '../../core/tokens/empty-state-messages.token';


@Component({
	selector: 'app-mi-table',
	imports: [MatTableModule, MatCheckboxModule, CommonModule, MatSortModule, MatPaginatorModule],
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
	paginateData = signal<Array<IItem>>([]);
	@ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator();
	@ViewChild(MatSort) sort: MatSort = new MatSort();

  reloadPagination = computed(() => {
    const dependency = this.miStore.data();
    const pageIndex = this.dataSource.paginator?.pageIndex || 0;
		const pageSize = this.dataSource.paginator?.pageSize || 5;
    return [...this.dataSource.data]?.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
  });

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

  effectPagination: EffectRef = effect(() => {
    this.selection.clear();
    this.paginateData.set(this.reloadPagination());
  });

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
    this.setPagination();
	}

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.paginateData().length;
		return numSelected === numRows;
	}

	toggleAllRows() {
		if (this.isAllSelected()) {
			this.clearRowSelection();
			return;
		}
		this.selection.select(...this.paginateData());
		this.miStore.setSelectedRows(this.selection.selected);
	}

	clearRowSelection(): void {
		this.selection.clear();
		this.miStore.setSelectedRows([]);
	}

	toggleSingleRow(row: IItem) {
		this.selection.toggle(row);
		this.miStore.setSelectedRows(this.selection.selected);
	}


	public pageChange(): void {
		this.clearRowSelection();
		const pageIndex = this.dataSource.paginator?.pageIndex || 0;
		const pageSize = this.dataSource.paginator?.pageSize || 5;
		this.setPagination(pageIndex, pageSize);
	}

	public setPagination(pageIndex = 0, pageSize = 5): void {
		const paginateData = [...this.dataSource.data]?.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
		this.paginateData.set([...paginateData]);
	}

	checkboxLabel(row?: IItem): string {
		if (!row) {
			return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
		}
		return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name}`;
	}

}
