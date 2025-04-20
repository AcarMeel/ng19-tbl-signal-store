import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { EMPTY_STATE_MESSAGES, emptyStateMessageFactory } from './core/tokens/empty-state-messages.token';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withComponentInputBinding(), withInMemoryScrolling({
            scrollPositionRestoration: 'top'
        })),
        {
            provide: EMPTY_STATE_MESSAGES,
            useFactory: emptyStateMessageFactory
        }
    ]
};
