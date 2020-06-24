import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
//import { getRouterState } from '../../router-store/router.state';
import { getAppState } from '.';
import * as EventsReducer from '../reducers/event.reducer';
import { AppState } from 'src/app/app-state';

// ________selectors_________

// eventsState
const getEventsState = createSelector(getAppState, (state: AppState) => state.events);

export const getCalendarEntities = createSelector(getEventsState, EventsReducer.getCalendarEvents);
export const getHalakhikEntities = createSelector(getEventsState, EventsReducer.getHalakhikEvents);
export const getSubEntities = createSelector(getEventsState, EventsReducer.getSubEvents);
export const getAllCalendarEvents = createSelector(
    getCalendarEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id])
    }
)
//export const getAllPrefsLoading = createSelector(getPrefsState, PrefsReducer.getPrefLoading);
//export const getSelectedMovies = createSelector(getMoviesState, (state: MoviesState) => {
//	const entities = DictionaryUtils.toArray<Movie>(state.data);
//	return { ...state, data: entities };
//});