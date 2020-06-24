import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as citiesActions from '../actions/cities.action';
import { map, switchMap, catchError, mergeMap, mapTo, withLatestFrom, exhaustMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CitiesService } from '../../services/cities.service'
import { CitiesState, getCities } from '../reducers/cities.reducer';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CitiesEffects {
    constructor(private actions$: Actions,
        private citiesService: CitiesService,
        private store: Store<CitiesState>,
        private toastrService: ToastrService) { }

    @Effect()
    getCities$: Observable<Action> = this.actions$.pipe(
        ofType<citiesActions.GetCities>(citiesActions.GET_CITIES),
        withLatestFrom(this.store.select(getCities)),
        mergeMap(() => this.citiesService.getCities().pipe( // get book list from service
            map(cities => new citiesActions.GetCitiesSuccess(cities)), // trigger action that saves new books to the store
            // catchError(err => of(new prefsActions.GetPreferencesFail(err))),
             catchError(err => {
                this.toastrService.error('error') 
                return of(new citiesActions.GetCitiesFail(err))
            }),
            
        ))
    )
    getPreferencesFail$: Observable<any> = this.actions$.pipe(
        ofType<citiesActions.GetCitiesFail>(citiesActions.GET_CITIES_FAIL),
        map((err) => {
            console.log('err');
            console.log(err);
            return of(this.toastrService.error('Error'));
        
              // remap to noop Action if no state needs to be updated. 
              // or for example on 401 Errors dispach a re-login action etc. 
        
              //return of({ 'type': null }); 
        }
        )
    )


}