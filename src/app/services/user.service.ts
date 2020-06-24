import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../store/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = environment.apiURL;
  constructor( private http: HttpClient
               ) { }
  
  loginUser(payload: any): Observable<any> {
    return this.http
    .post<any>(this.baseURL + '/login', payload) 
    .pipe(catchError((error: any) => Observable.throw(error.json())))
  }


}
