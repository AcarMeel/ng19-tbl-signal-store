import { Routes } from '@angular/router';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { MIDataStore } from './manage-items/store/data.store';

export const routes: Routes = [
  {
    path: 'manage-items',
    component: ManageItemsComponent,
    providers: [
      MIDataStore
    ]
  },
  {
    path: '', redirectTo: 'manage-items', pathMatch: 'full'
  }
];
