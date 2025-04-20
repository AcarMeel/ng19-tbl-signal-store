import { InjectionToken } from "@angular/core";
import { ISelector } from "../interfaces/selector.interface";

export const FILTER_OPT_DROPDOWN = new InjectionToken<
  (context: string) => ISelector[]
>('FILTER_OPT_DROPDOWN');

export function getManageItemsOpt(): (context: string) => ISelector[] {
  return () => [
    { value: 'NONE', viewValue: 'Select an option'},
    { value: 'ALL', viewValue: 'All'},
    { value: 'FAV', viewValue: 'Favorite'}
  ];
}

export function getManagePetOpt(): (context: string) => ISelector[] {
  return (option) => {
    switch (option) {
      case 'accesories':
        return [
          { value: 'NONE', viewValue: 'Select an option'},
          { value: 'ALL', viewValue: 'All Accesories'},
          { value: 'FAVE', viewValue: 'My favorite Accesories'},
          { value: 'PREV', viewValue: 'My previous Accesories'}
        ];

      default:
        return [
          { value: 'NONE', viewValue: 'Select an option'},
          { value: 'ALL', viewValue: 'All Pets'},
          { value: 'FAVE', viewValue: 'My favorite Pets'},
          { value: 'PREV', viewValue: 'My previous Pets'}
        ];
    }
  }
}
