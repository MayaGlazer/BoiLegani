import { Action } from '@ngrx/store'
import { City } from '../models/city.model';

//export enum CalendarEvents {
//    ADD_EVENT = '',
//    GET_EVENTS = '[Events] Get All Events'
//}
export const ADD_CITY = '[Cities] Add City';
export const ADD_CITY_FAIL = '[Cities] Add City Failed';
export const ADD_CITY_SUCCESS = '[Cities] Add City Successful';
export const GET_CITIES = '[Cities] Get All Cities';
export const GET_CITIES_FAIL = '[Cities] Get All Cities Failed';
export const GET_CITIES_SUCCESS = '[Cities] Get All Cities Successful';
// export const GET_CITY = '[Cities] Get City by';
// export const GET_CITY_FAIL = '[Cities] Get All Cities Failed';
// export const GET_CITY_SUCCESS = '[Cities] Get All Cities Successful';

export class AddCity implements Action {
    readonly type = ADD_CITY;
    constructor(public payload: City) { }
}

export class AddCityFail implements Action {
    readonly type = ADD_CITY_FAIL;
    constructor(public payload?: any) { }
}

export class AddCitySuccess implements Action {
    readonly type = ADD_CITY_SUCCESS;
    constructor(public payload?: City) { }
}

export class GetCities implements Action {
    readonly type = GET_CITIES;
    constructor(public payload?: number) { }
}

export class GetCitiesFail implements Action {
    readonly type = GET_CITIES_FAIL
    constructor(public payload: any) { }
}

export class GetCitiesSuccess implements Action {
    readonly type = GET_CITIES_SUCCESS;
    constructor(public payload: City[]) { }
}
 
export type citiesAction = AddCity | AddCityFail | AddCitySuccess | GetCities |
                        GetCitiesFail | GetCitiesSuccess;