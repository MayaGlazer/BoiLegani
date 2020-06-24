import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HalakhikPreferences } from '../store/models/preferences.model';
//import { Config as conf } from '../../assets/config'
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  baseURL: string = environment.apiURL;
  constructor( private http: HttpClient
               ) { }
  
  getPreferences(): Observable<HalakhikPreferences> {
    return this.http
    .get<HalakhikPreferences>(this.baseURL + '/preferences')
    .pipe(catchError((error: any) => Observable.throw(error.json())))
  }

}
