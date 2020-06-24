import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as countriesActions from '../actions/countries.action';
import { map, switchMap, catchError, mergeMap, mapTo, withLatestFrom, exhaustMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CountriesService } from '../../services/countries.service'
import { CountriesState, getCountries } from '../reducers/countries.reducer';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CountriesEffects {
    constructor(private actions$: Actions,
        private countriesService: CountriesService,
        private store: Store<CountriesState>,
        private toastrService: ToastrService) { }

    @Effect()
    getCountries$: Observable<Action> = this.actions$.pipe(
        ofType<countriesActions.GetCountries>(countriesActions.GET_COUNTRIES),
        withLatestFrom(this.store.select(getCountries)),
        mergeMap(() => this.countriesService.getCountries().pipe( // get book list from service
            map(countries => new countriesActions.GetCountriesSuccess(countries)), // trigger action that saves new books to the store
            // catchError(err => of(new prefsActions.GetPreferencesFail(err))),
             catchError(err => {
                this.toastrService.error('error') 
                return of(new countriesActions.GetCountriesFail(err))
            }),
            
        ))
    )
    getPreferencesFail$: Observable<any> = this.actions$.pipe(
        ofType<countriesActions.GetCountriesFail>(countriesActions.GET_COUNTRIES_FAIL),
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