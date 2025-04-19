import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { IItem } from "../../core/interfaces/item.interface";
import { computed, effect } from "@angular/core";
import { MOCK_ITEMS } from "../../core/data/items";


type MIDataState = {
    data: Array<IItem>;
    filter: string;
    displayedColumns: string[];
    selectedRows: Array<IItem>;
}

const initialState: MIDataState = {
    data: [],
    filter: 'ALL',
    displayedColumns: ['select', 'name', 'status', 'date', 'action'],
    selectedRows: []
};

export const MIDataStore = signalStore(
    withState(initialState),
    withMethods((store) => ({
        setItems(data: Array<IItem>): void {
            patchState(store, () => ({ data }))
        },
        setFilter(filter: string): void {
            patchState(store, () => ({ filter }))
        },
        setSelectedRows(rows: Array<IItem>): void {
          console.log('set rows selected ', rows)
          patchState(store, () => ({ selectedRows: rows }))
        }
    })),
    withComputed(({ data }) => ({
        totalResults: computed(() => data().length)
    })),
    withHooks({
        onInit(store) {
            effect(() => { // llamar API
                console.log('Ejecutando effect')
                const filter = store.filter();
                if (filter === 'ALL') {
                    store.setItems(MOCK_ITEMS);
                } else if (filter === 'FAV') {
                    store.setItems(MOCK_ITEMS.filter(item => item.status === 'FAV'));
                } else {
                    store.setItems([]);
                }
            })
        }
    })
);
