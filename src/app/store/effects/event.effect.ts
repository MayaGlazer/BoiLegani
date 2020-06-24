import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store'
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as eventActions from '../actions/event.action';
import { switchMap, catchError, mergeMap } from 'rxjs/operators';
import { CalendarEvent } from '../models/calendar-event.model';
import { Observable } from 'rxjs';
import { CalendarEventsService} from '../../services/calendar-events.service'

@Injectable()
export class EventEffects {
    constructor(private actions$: Actions,
        private calendarEventsService: CalendarEventsService) {}

    //@Effect()
    //getEvents$: Observable<Action> = this.actions$.pipe(
    //    ofType(eventActions.CalendarEvents.GET_EVENTS),
    //    mergeMap(() => this.calendarEventsService.GetEvents().pipe( // get book list from service
    //      map(books => new GetEventsSuccess(events)) // trigger action that saves new books to the store
    //    ))
    

}