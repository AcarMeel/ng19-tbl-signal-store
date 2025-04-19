import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";


type UIState = {
    isMobile: boolean;
    theme: string;
    isLoading: boolean;
}

const initialState: UIState = {
    isMobile: false,
    theme: 'light',
    isLoading: false,
};

export const UIStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        toggleIsMobile(): void {
            patchState(store, (state) => ({
                isMobile: !state.isMobile
            }))
        },
        setTheme(theme: string): void {
            patchState(store, () => ({ theme }))
        }
    }))
);
