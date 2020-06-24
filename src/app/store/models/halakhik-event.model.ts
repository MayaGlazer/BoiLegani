export interface HalakhikEvent {
    id?: number;
    userId: number;
    halakhic_typeId: number;
    startdate: Date;
    enddate: Date;
    isAfterSunset: boolean;
    comment: string;
    time: string;
    isClosed: boolean
}