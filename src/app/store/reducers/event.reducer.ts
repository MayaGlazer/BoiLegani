import * as fromEvents from '../actions/event.action';
import { CalendarEvent } from '../models/calendar-event.model';
import { HalakhikEvent } from '../models/halakhik-event.model';
import { SubEvent } from '../models/sub-events.model';

export interface EventState {
    halakhikEvents: { [id: number]: HalakhikEvent };
    calendarEvents: { [id: number]: CalendarEvent };
    subEvents: { [id: number]: SubEvent };
    loaded: boolean;
    loading: boolean;
}

export const initialState: EventState = {
    halakhikEvents: {},
    calendarEvents: {},
    subEvents: {},
    loaded: false,
    loading: false
}

export function EventsReducer(
    state = initialState,
    action: fromEvents.EventsAction
): EventState {

    switch (action.type) {

        case fromEvents.GET_CALENDAR_EVENTS: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            })
        }

        case fromEvents.GET_CALENDAR_EVENTS_FAIL: {
            return Object.assign({}, state, {
                loading: false,
                loaded: false
            })
        }

        case fromEvents.GET_CALENDAR_EVENTS_SUCCESS: {
            let data = action.payload;
            const entities = data.reduce(
                (entities: { [id: number]: CalendarEvent }, event: CalendarEvent) => {
                    return {
                        ...entities,
                        [event.id]: event
                    }
                }, {
                ...state.calendarEvents
            })
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                calendarEvents: entities
            })
        }
        case fromEvents.GET_HALAKHIK_EVENTS: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            })
        }

        case fromEvents.GET_HALAKHIK_EVENTS_FAIL: {
            return Object.assign({}, state, {
                loading: false,
                loaded: false
            })
        }

        case fromEvents.GET_HALAKHIK_EVENTS_SUCCESS: {
            let data = action.payload;
            const entities = data.reduce(
                (entities: { [id: number]: HalakhikEvent }, event: HalakhikEvent) => {
                    return {
                        ...entities,
                        [event.id]: event
                    }
                }, {
                ...state.halakhikEvents
            })
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                halakhikEvents: entities
            })
        }
        case fromEvents.GET_SUB_EVENTS: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            })
        }

        case fromEvents.GET_SUB_EVENTS_FAIL: {
            return Object.assign({}, state, {
                loading: false,
                loaded: false
            })
        }

        case fromEvents.GET_SUB_EVENTS_SUCCESS: {
            let data = action.payload;
            const entities = data.reduce(
                (entities: { [id: number]: SubEvent }, event: SubEvent) => {
                    return {
                        ...entities,
                        [event.id]: event
                    }
                }, {
                ...state.subEvents
            })
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                subEvents: entities
            })
        }



    }

    return state;
}

export const getEventLoading = (state: EventState) => state.loading;
export const getEventLoaded = (state: EventState) => state.loaded;
export const getCalendarEvents = (state: EventState) => state.calendarEvents;
export const getHalakhikEvents = (state: EventState) => state.halakhikEvents;
export const getSubEvents = (state: EventState) => state.subEvents;