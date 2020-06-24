import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { _UserState } from '../store/reducers/user.reducer';
import { AppState } from '../app-state';
import { Store, select } from '@ngrx/store';
import { getUserState } from '../store/selectors/user.selector';
import { Router, ActivatedRoute } from '@angular/router';
import { CountriesState, getCountries } from '../store/reducers/countries.reducer';
import { CitiesState } from '../store/reducers/cities.reducer';
import { getCountriesState } from '../store/selectors/countries.selector';
import { getCitiesState } from '../store/selectors/cities.selector';
import * as countriesActions from '../store/actions/countries.action';
import * as citiesActions from '../store/actions/cities.action';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {

  userState$: Observable<_UserState>;
  countriesState$ = new Observable<CountriesState>();
  citiesState$ = new Observable<CitiesState>();
  path: string;

  constructor(private fb: FormBuilder,
              private store: Store<AppState>,
              private route: ActivatedRoute) { }
  
  ngOnInit() {
    // this.userState$ = this.store.select(getUserState);
    this.store.dispatch(new citiesActions.GetCities);
    this.store.dispatch(new countriesActions.GetCountries);
    this.path = this.route.snapshot.routeConfig.path;
    this.countriesState$ = this.store.pipe(select(state => state.countries));
    this.citiesState$ = this.store.pipe(select(state => state.cities));
    // this.citiesState$ = this.store.select(getCitiesState);
  }

}
