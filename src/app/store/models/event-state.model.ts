import { HalakhikEvent } from './halakhik-event.model'
import { CalendarEvent } from './calendar-event.model'
import { SubEvent } from './sub-events.model'

export interface EventsState {
    halakhikEvents: HalakhikEvent,
    calendarEvents: CalendarEvent,
    subEvents: SubEvent
}