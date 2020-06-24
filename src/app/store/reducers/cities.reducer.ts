import * as fromCities from '../actions/cities.action';
import { City } from '../models/city.model'

export interface CitiesState {
    data: { [id: number]: City };
    loaded: boolean;
    loading: boolean;
}

export const initialState: CitiesState = {
    data: {},
    loaded: false,
    loading: false
}

export function CitiesReducer(
    state = initialState,
    action: fromCities.citiesAction
): CitiesState {

    switch (action.type) {

        case fromCities.ADD_CITY: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            })
        }

        case fromCities.ADD_CITY_FAIL: {
            return Object.assign({}, state, {
                loading: false,
                loaded: false
            })
        }

        case fromCities.ADD_CITY_SUCCESS: {
            var data = action.payload;
            
            return {
                ...state,
                data: { ...state.data, [action.payload.id]: action.payload}
              }
        }

        case fromCities.GET_CITIES: {
            
            return Object.assign({}, state, {
                loading: false,
                loaded: false
            })
        }
        
                case fromCities.GET_CITIES_FAIL: {
                    return Object.assign({}, state, {
                        loading: false,
                        loaded: false
                    })
                }

        case fromCities.GET_CITIES_SUCCESS: {
            let data = action.payload;
            const entities = data.reduce(
                (entities: { [id: number]: City }, event: City) => {
                    return {
                        ...entities,
                        [event.id]: event
                    }
                }, {
                ...state.data
            })
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                data: entities
            })
        }
       


    }

    return state;
}

export const getCitiesLoading = (state: CitiesState) => state.loading;
export const getCitiesLoaded = (state: CitiesState) => state.loaded;
export const getCities = (state: CitiesState) => state.data;
