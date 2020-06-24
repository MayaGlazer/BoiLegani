import { Action } from '@ngrx/store'
import { CalendarEvent } from '../models/calendar-event.model'
import { HalakhikEvent } from '../models/halakhik-event.model';
import { SubEvent } from '../models/sub-events.model';


export const GET_HALAKHIK_EVENTS = '[Events] Get All Halkhik Events For User';
export const GET_HALAKHIK_EVENTS_FAIL = '[Events] Get All Halakhik Events For User Failed';
export const GET_HALAKHIK_EVENTS_SUCCESS = '[Events] Get All Halakhik Events For User Successful';
export const GET_CALENDAR_EVENTS = '[Events] Get All Calendar Events For User';
export const GET_CALENDAR_EVENTS_FAIL = '[Events] Get All Calendar Events For User Failed';
export const GET_CALENDAR_EVENTS_SUCCESS = '[Events] Get All Calendar Events For User Successful';
export const GET_SUB_EVENTS = '[Events] Get All SubEvents For User';
export const GET_SUB_EVENTS_FAIL = '[Events] Get All SubEvents For User Failed';
export const GET_SUB_EVENTS_SUCCESS = '[Events] Get All SubEvents For User Successful';
export const GET_LAST_HALAKHIK_EVENT = '[Events] Get Last Halakhik Event For User';
export const GET_LAST_HALAKHIK_EVENT_FAIL = '[Events] Get Last Halakhik Event For User Failed';
export const GET_LAST_HALAKHIK_EVENT_SUCCESS = '[Events] Get Last Halakhik Event For User Successful';
export const ADD_PERIOD_START = '[Events] Add New Period Start Event';
export const ADD_PERIOD_START_FAIL = '[Events] Add New Period Start Failed';
export const ADD_PERIOD_START_SUCCESS = '[Events] Add New Period Start Successful';
export const ADD_PERIOD = '[Events] Add New Period Event';
export const ADD_PERIOD_FAIL = '[Events] Add New Period Failed';
export const ADD_PERIOD_SUCCESS = '[Events] Add New Period Successful';

export class GetHalakhikEvents implements Action {
    readonly type = GET_HALAKHIK_EVENTS;
    constructor() { }
}

export class GetHalakhikEventsFail implements Action {
    readonly type = GET_HALAKHIK_EVENTS_FAIL;
    constructor(public payload: any) { }
}

export class GetHalakhikEventsSuccess implements Action {
    readonly type = GET_HALAKHIK_EVENTS_SUCCESS;
    constructor(public payload: HalakhikEvent[]) { }
}
export class GetCalendarEvents implements Action {
    readonly type = GET_CALENDAR_EVENTS;
    constructor() { }
}

export class GetCalendarEventsFail implements Action {
    readonly type = GET_CALENDAR_EVENTS_FAIL;
    constructor(public payload: any) { }
}

export class GetCalendarEventsSuccess implements Action {
    readonly type = GET_CALENDAR_EVENTS_SUCCESS;
    constructor(public payload: CalendarEvent[]) { }
}
export class GetSubEvents implements Action {
    readonly type = GET_SUB_EVENTS;
    constructor() { }
}

export class GetSubEventsFail implements Action {
    readonly type = GET_SUB_EVENTS_FAIL;
    constructor(public payload: any) { }
}

export class GetSubEventsSuccess implements Action {
    readonly type = GET_SUB_EVENTS_SUCCESS;
    constructor(public payload: SubEvent[]) { }
}
export class GetLastHalakhikEvent implements Action {
    readonly type = GET_LAST_HALAKHIK_EVENT;
    constructor() { }
}

export class GetLastHalakhikEventFail implements Action {
    readonly type = GET_LAST_HALAKHIK_EVENT_FAIL;
    constructor(public payload: any) { }
}

export class GetLastHalakhikEventSuccess implements Action {
    readonly type = GET_LAST_HALAKHIK_EVENT_SUCCESS;
    constructor(public payload: HalakhikEvent) { }
}

 
export type EventsAction = GetCalendarEvents | GetCalendarEventsFail | GetCalendarEventsSuccess |
                            GetHalakhikEvents | GetHalakhikEventsFail | GetHalakhikEventsSuccess |
                            GetLastHalakhikEvent | GetLastHalakhikEventFail | GetLastHalakhikEventSuccess |
                            GetSubEvents | GetSubEventsFail | GetSubEventsSuccess;