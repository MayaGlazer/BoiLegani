import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from "rxjs/operators"
import { AuthService } from '../services/auth.service';
import { UserState } from '../store/models/user-state.model';
import { Store, select } from '@ngrx/store';
import { getUserState } from '../store/selectors/user.selector';
import * as UserActions from '../store/actions/user.action';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private store: Store<UserState>) {}
              canActivate(): Observable<boolean> {
                return this.store.pipe(
                  select(getUserState),
                  map(user => {
                    if(user.isLoggedIn) {
                      return true;
                    }
                    let token = this.authService.getToken()
                    if (!token) {
                      this.store.dispatch(new UserActions.GetUserFail('Error'));
                      return false;
                    } else {
                      this.store.dispatch(new UserActions.GetUser())
                      return true;
                    }
            
                  }),
                  take(1)
                );
              }


  
}
