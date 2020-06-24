import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as prefsActions from '../actions/preferences.action';
import { map, switchMap, catchError, mergeMap, mapTo, withLatestFrom, exhaustMap } from 'rxjs/operators';
import { HalakhikPreferences } from '../models/preferences.model';
import { Observable, of } from 'rxjs';
import { PreferencesService } from '../../services/preferences.service'
import { PrefsState, getPrefs } from '../reducers/preferences.reducer';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class PrefsEffects {
    constructor(private actions$: Actions,
        private prefsService: PreferencesService,
        private store: Store<PrefsState>,
        private toastrService: ToastrService) { }

    @Effect()
    getPreferences$: Observable<Action> = this.actions$.pipe(
        ofType<prefsActions.GetPreferences>(prefsActions.GET_PREFERENCES),
        withLatestFrom(this.store.select(getPrefs)),
        mergeMap(() => this.prefsService.getPreferences().pipe( // get book list from service
            map(prefs => new prefsActions.GetPreferencesSuccess(prefs)), // trigger action that saves new books to the store
            // catchError(err => of(new prefsActions.GetPreferencesFail(err))),
             catchError(err => {
                this.toastrService.error('error') 
                return of(new prefsActions.GetPreferencesFail(err))
            }),
            
        ))
    )
    getPreferencesFail$: Observable<any> = this.actions$.pipe(
        ofType<prefsActions.GetPreferencesFail>(prefsActions.GET_PREFERENCES_FAIL),
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