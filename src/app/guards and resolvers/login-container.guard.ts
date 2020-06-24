import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, fromEvent } from 'rxjs';
import { AppState } from '../app-state';
import { Store, select } from '@ngrx/store';
import { getCountriesState, getCountryLoaded, getCountriesCitiesLoaded } from '../store/selectors/countries.selector';
import { getCountries, getCountriesLoaded } from '../store/reducers/countries.reducer';
import * as countriesActions from '../store/actions/countries.action';
import { tap, map, take, switchMap, catchError, filter, withLatestFrom } from 'rxjs/operators';
import * as fromStore from '../store';
import { getCityLoaded } from '../store/selectors/cities.selector';

@Injectable({
  providedIn: 'root'
})
export class LoginContainerGuard implements CanActivate {
  constructor(private store: Store<AppState>) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkStore().pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      )
      // return this.store.select(getCountryLoaded).pipe(
      //   map(loaded => {
      //     // if my user is loaded this will be true
      //     if (!loaded) {
      //       this.store.dispatch(new fromStore.GetCountries());
      //     }
      //   }),
      //   filter(loaded) => loaded),
      //   take(1),
      //   withLatestFrom(this.store.select(getCityLoaded)),
      //   map(([nullData, loaded]) => {
      //     if(!loaded) {
      //       this.store.dispatch(new fromStore.GetCities())
      //     }
      //   }),
      //   filter(([data, loaded]) => loaded),
      //   take(1)
      // );
   }
  checkStore() {
    return this.store.select(getCountriesCitiesLoaded)
           .pipe(
      tap((loaded) => {
        console.log(loaded);
        if(!loaded) {
          this.store.dispatch(new fromStore.GetCountries())
          this.store.dispatch(new fromStore.GetCities())
        }
      }),
      filter((loaded) => loaded),
      take(1)
    )
  }



}
