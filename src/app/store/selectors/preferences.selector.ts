import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
//import { getRouterState } from '../../router-store/router.state';
import { getAppState } from '.';
import * as PrefsReducer from '../reducers/preferences.reducer';
import { AppState } from 'src/app/app-state';

// ________selectors_________

// prefsState
const getPrefsState = createSelector(getAppState, (state: AppState) => state.preferences);

export const getAllPrefs = createSelector(getPrefsState, PrefsReducer.getPrefs);
export const getAllPrefsLoading = createSelector(getPrefsState, PrefsReducer.getPrefLoading);
//export const getSelectedMovies = createSelector(getMoviesState, (state: MoviesState) => {
//	const entities = DictionaryUtils.toArray<Movie>(state.data);
//	return { ...state, data: entities };
//});