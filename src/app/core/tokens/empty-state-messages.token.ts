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
