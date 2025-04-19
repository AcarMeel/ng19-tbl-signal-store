import { Routes } from '@angular/router';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { MIDataStore } from './manage-items/store/data.store';
import { ManagePetsComponent } from './manage-pets/manage-pets.component';
import { EMPTY_STATE_MESSAGES, emptyPetMessageFactory } from './core/tokens/empty-state-messages.token';

export const routes: Routes = [
  {
    path: 'manage-items',
    component: ManageItemsComponent,
    providers: [
      MIDataStore
    ]
  },
  {
    path: 'manage-pets',
    component: ManagePetsComponent,
    providers: [
      {
        provide: EMPTY_STATE_MESSAGES,
        useFactory: emptyPetMessageFactory
      }
    ]
  },
  {
    path: '', redirectTo: 'manage-items', pathMatch: 'full'
  }
];
