import { CalendarEvent } from './store/models/calendar-event.model';
import { City } from './store/models/city.model';
import { Country } from './store/models/country.model';
import { HalakhikPreferences } from './store/models/preferences.model';
import { initialState as initialEventsState, EventState }  from './store/reducers/event.reducer';
import { initialState as initialPrefsState, PrefsState }  from './store/reducers/preferences.reducer';
import { initialState as initialUserState, _UserState } from './store/reducers/user.reducer';
import { initialState as initialCitiesState ,CitiesState } from './store/reducers/cities.reducer';
import { initialState as initialCountriesState ,CountriesState } from './store/reducers/countries.reducer';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './store/selectors';
import { RouterReducerState } from '@ngrx/router-store';
import { EventsState } from './store/models/event-state.model';


export interface AppState {
    router: fromRouter.RouterReducerState<RouterStateUrl>;
    events: EventState;
    preferences: PrefsState;
    user: _UserState;
    cities: CitiesState;
    countries: CountriesState;
    selectedEvent: number
}

export const initialRouterState: RouterReducerState<RouterStateUrl>= {
    state: { url: "/", queryParams: {}, params: {} },
    navigationId: -1
}

export const initialAppState: AppState = {
    router: initialRouterState,
    events: initialEventsState,
    preferences: initialPrefsState,
    user: initialUserState,
    cities: initialCitiesState,
    countries: initialCountriesState,
    selectedEvent: 0
}

export function getInitialState(): AppState {
    return initialAppState;
}