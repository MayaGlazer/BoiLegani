import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Country } from '../store/models/country.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseURL: string = environment.apiURL;
  constructor( private http: HttpClient
               ) { }
  
  getCountries(): Observable<Country[]> {
    return this.http
    .get<Country[]>(this.baseURL + '/countries')
    .pipe(catchError((error: any) => Observable.throw(error.json())))
  }
}
