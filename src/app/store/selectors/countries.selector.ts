import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
//import { getRouterState } from '../../router-store/router.state';
import { getAppState } from '.';
import * as countriesReducer from '../reducers/countries.reducer';
import { AppState } from 'src/app/app-state';
import { getCountries } from '../reducers/countries.reducer';

// ________selectors_________

// prefsState
export const getCountriesState = createSelector(getAppState, (state: AppState) => state.countries);
export const getCountriesCitiesLoaded = createSelector(getAppState, (state: AppState) => state.countries.loaded && state.cities.loaded);

//export const getCountry = createSelector(getCountriesState, countriesReducer.getCountries);
export const getAllCountries= createSelector(getCountries, data => {
    Object.keys(data).map(id => data[parseInt(id,10)])
})
export const getCountryLoaded = createSelector(getCountriesState, countriesReducer.getCountriesLoaded);

export const getCountryLoading = createSelector(getCountriesState, countriesReducer.getCountriesLoading);