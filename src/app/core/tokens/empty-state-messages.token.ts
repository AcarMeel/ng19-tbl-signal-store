import { InjectionToken } from '@angular/core';

export const EMPTY_STATE_MESSAGES = new InjectionToken<
  (filter: string) => string
>('EMPTY_STATE_MESSAGES');

export function emptyStateMessageFactory(): (filter: string) => string {
  return (filter) => {
    switch (filter) {
      case 'ALL':
        return 'No items found';
      case 'FAV':
        return 'No favorite items found';
      default:
        return 'Select a filter to see items';
    }
  };
}

export function emptyPetMessageFactory(): (filter: string) => string {
  return (filter) => {
    switch (filter) {
      case 'ALL':
        return `We're sorry. We run out of pet items.`;
      case 'FAVE':
        return 'Oops! You have no favorite pet items yet!';
      case 'PREV':
        return 'Oops! You have no previous pet items!';
      default:
        return 'Select a filter to see pet items';
    }
  };
}
