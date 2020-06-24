import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app-state'
import * as Users from './user.reducer';
import * as Events from './event.reducer';
import * as Countries from './countries.reducer';
import * as Cities from './cities.reducer';
import * as Prefs from './preferences.reducer';
import * as fromPrefs from '../actions/preferences.action';
import * as fromRouter from '@ngrx/router-store';



export const reducers: ActionReducerMap<AppState> = {
    router: fromRouter.routerReducer,
    events: Events.EventsReducer,
    countries: Countries.CountriesReducer,
    cities: Cities.CitiesReducer,
    preferences: Prefs.PrefsReducer,
    user: Users.UserReducer,
    selectedEvent: null
}

