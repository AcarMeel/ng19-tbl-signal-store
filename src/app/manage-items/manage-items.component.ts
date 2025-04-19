import { Component } from '@angular/core';
import { MiToolbarComponent } from './mi-toolbar/mi-toolbar.component';
import { MiTableComponent } from './mi-table/mi-table.component';

@Component({
  selector: 'app-manage-items',
  imports: [
    MiToolbarComponent,
    MiTableComponent
  ],
  templateUrl: './manage-items.component.html',
  styleUrl: './manage-items.component.scss'
})
export class ManageItemsComponent {

}
