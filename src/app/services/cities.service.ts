import { Injectable } from '@angular/core';
import { City } from '../store/models/city.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  baseURL: string = environment.apiURL;
  constructor( private http: HttpClient
               ) { }
  
  getCities(): Observable<City[]> {
    return this.http
    .get<City[]>(this.baseURL + '/cities')
    .pipe(catchError((error: any) => Observable.throw(error.json())))
  }
}
