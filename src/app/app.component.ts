import { Component, inject, OnInit, signal } from '@angular/core';
import { UIStore } from './core/store/ui.store';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    readonly uiStore = inject(UIStore);


    toggleMobileScreen(): void {
        this.uiStore.toggleIsMobile();
    }

    setTheme( theme: string ): void {
        this.uiStore.setTheme(theme);
    }
}
