import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
//import { getRouterState } from '../../router-store/router.state';
import { getAppState } from '.';
import * as citiesReducer from '../reducers/cities.reducer';
import { AppState } from 'src/app/app-state';

// ________selectors_________

// prefsState
export const getCitiesState = createSelector(getAppState, (state: AppState) => state.cities);

//export const getCountry = createSelector(getCountriesState, countriesReducer.getCountries);
export const getCityLoaded = createSelector(getCitiesState, citiesReducer.getCitiesLoaded);
//export const getCountryLoading = createSelector(getCountriesState, countriesReducer.getCountriesLoading);