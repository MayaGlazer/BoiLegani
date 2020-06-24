export interface CalendarEvent {
    id: number;
    userId: number;
    eventId: number;
    event_typeId: number;
    date: Date;
    isManual: number;
    isAfterSunset: number;
    comment: string;
    time: string;
    seqNumber: number;
    }