import { Action } from '@ngrx/store'
import { HalakhikPreferences } from '../models/preferences.model';

//export enum CalendarEvents {
//    ADD_EVENT = '',
//    GET_EVENTS = '[Events] Get All Events'
//}
export const ADD_PREFERENCES = '[Events] Add Preferences';
export const ADD_PREFERENCES_FAIL = '[Events] Add Preferences Failed';
export const ADD_PREFERENCES_SUCCESS = '[Events] Add Preferences Successful';
export const GET_PREFERENCES = '[Events] Get All Preferences';
export const GET_PREFERENCES_FAIL = '[Events] Get Preferences Failed';
export const GET_PREFERENCES_SUCCESS = '[Events] Get Preferences Successful';

export class AddPreferences implements Action {
    readonly type = ADD_PREFERENCES;
    constructor(public payload: HalakhikPreferences) { }
}

export class AddPreferencesFail implements Action {
    readonly type = ADD_PREFERENCES_FAIL;
    constructor(public payload: any) { }
}

export class AddPreferencesSuccess implements Action {
    readonly type = ADD_PREFERENCES_SUCCESS;
    constructor(public payload: HalakhikPreferences) { }
}

export class GetPreferences implements Action {
    readonly type = GET_PREFERENCES;
    constructor() { }
}

export class GetPreferencesFail implements Action {
    readonly type = GET_PREFERENCES_FAIL
    constructor(public payload: any) { }
}

export class GetPreferencesSuccess implements Action {
    readonly type = GET_PREFERENCES_SUCCESS;
    constructor(public payload: HalakhikPreferences) { }
}
 
export type PrefsAction = AddPreferences | AddPreferencesFail | AddPreferencesSuccess | GetPreferences |
            GetPreferencesFail | GetPreferencesSuccess;