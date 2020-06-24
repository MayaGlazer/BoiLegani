import { Action } from '@ngrx/store'
import { Country } from '../models/country.model';

//export enum CalendarEvents {
//    ADD_EVENT = '',
//    GET_EVENTS = '[Events] Get All Events'
//}
export const ADD_COUNTRY = '[Countries] Add City';
export const ADD_COUNTRY_FAIL = '[Countries] Add City Failed';
export const ADD_COUNTRY_SUCCESS = '[Countries] Add City Successful';
export const GET_COUNTRIES = '[Countries] Get All Cities';
export const GET_COUNTRIES_FAIL = '[Countries] Get All Cities Failed';
export const GET_COUNTRIES_SUCCESS = '[Countries] Get All Cities Successful';
// export const GET_CITY = '[Cities] Get City by';
// export const GET_CITY_FAIL = '[Cities] Get All Cities Failed';
// export const GET_CITY_SUCCESS = '[Cities] Get All Cities Successful';

export class AddCountry implements Action {
    readonly type = ADD_COUNTRY;
    constructor(public payload: Country) { }
}

export class AddCountryFail implements Action {
    readonly type = ADD_COUNTRY_FAIL;
    constructor(public payload?: any) { }
}

export class AddCountrySuccess implements Action {
    readonly type = ADD_COUNTRY_SUCCESS;
    constructor(public payload?: Country) { }
}

export class GetCountries implements Action {
    readonly type = GET_COUNTRIES;
    constructor(public payload?: number) { }
}

export class GetCountriesFail implements Action {
    readonly type = GET_COUNTRIES_FAIL
    constructor(public payload: any) { }
}

export class GetCountriesSuccess implements Action {
    readonly type = GET_COUNTRIES_SUCCESS;
    constructor(public payload: Country[]) { }
}
 
export type countriesAction = AddCountry | AddCountryFail | AddCountrySuccess | GetCountries |
                        GetCountriesFail | GetCountriesSuccess;