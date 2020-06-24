export interface SubEvent {
    id: number;
    calender_eventId: number;
    event_typeId: number;
    date: Date;
    isManual: number
    isAfterSunset: number
    comment: string
    time: string
    seqNumber: number
}