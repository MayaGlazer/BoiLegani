import * as fromCountries from '../actions/countries.action';
import { Country } from '../models/country.model';

export interface CountriesState {
    data: { [id: number]: Country };
    loaded: boolean;
    loading: boolean;
}

export const initialState: CountriesState = {
    data: {},
    loaded: false,
    loading: false
}

export function CountriesReducer(
    state = initialState,
    action: fromCountries.countriesAction
): CountriesState {

    switch (action.type) {

        case fromCountries.ADD_COUNTRY: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            })
        }

        case fromCountries.ADD_COUNTRY_FAIL: {
            return Object.assign({}, state, {
                loading: false,
                loaded: false
            })
        }

        case fromCountries.ADD_COUNTRY_SUCCESS: {
            var data = action.payload;

            return {
                ...state,
                data: { ...state.data, [action.payload.id]: action.payload }
            }
        }

        case fromCountries.GET_COUNTRIES: {

            return Object.assign({}, state, {
                loading: false,
                loaded: false
            })
        }

        case fromCountries.GET_COUNTRIES_FAIL: {
            return Object.assign({}, state, {
                loading: false,
                loaded: false
            })
        }

        case fromCountries.GET_COUNTRIES_SUCCESS: {
            let data = action.payload;
            const entities = data.reduce(
                (entities: { [id: number]: Country }, event: Country) => {
                    return {
                        ...entities,
                        [event.id]: event
                    }
                }, {
                ...state.data
            })
            return Object.assign({}, state, {
                data: entities,
                loading: false,
                loaded: true
            })
        }



    }

    return state;
}

export const getCountriesLoading = (state: CountriesState) => state.loading;
export const getCountriesLoaded = (state: CountriesState) => state.loaded;
export const getCountries = (state: CountriesState) => state.data;
