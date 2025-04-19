import { Component, inject } from '@angular/core';
import { DownloadReportComponent } from './download-report/download-report.component';
import { FilterDropdownComponent } from './filter-dropdown/filter-dropdown.component';
import { PageSizeComponent } from './page-size/page-size.component';
import { MIDataStore } from '../store/data.store';

@Component({
    selector: 'app-mi-toolbar',
    imports: [
        DownloadReportComponent,
        FilterDropdownComponent,
        PageSizeComponent
    ],
    templateUrl: './mi-toolbar.component.html',
    styleUrl: './mi-toolbar.component.scss'
})
export class MiToolbarComponent {
    readonly miStore = inject(MIDataStore);

    public setFilterSelected(filter: string): void {
        this.miStore.setFilter(filter || 'NONE');
    }

}
