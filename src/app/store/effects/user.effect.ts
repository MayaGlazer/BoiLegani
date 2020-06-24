import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store'
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as usersActions from '../actions/user.action';
import { map, switchMap, catchError, mergeMap, mapTo, withLatestFrom, exhaustMap, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../services/auth.service'
import { UserService } from '../../services/user.service'
import { _UserState, getUser } from '../reducers/user.reducer';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions,
        private authService: AuthService,
        private userService: UserService,
        private store: Store<_UserState>,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService) {}

    @Effect()
    loginUser$: Observable<Action> = this.actions$.pipe(
        ofType<usersActions.LoginUser>(usersActions.LOGIN_USER),
        withLatestFrom(this.store.select(getUser)),
        mergeMap(([payload, state]) => this.userService.loginUser(payload).pipe( 
          map(user => new usersActions.LoginUserSuccess(user)), 
          tap(() => this.router.navigate(['/login'])),
          catchError(error => of(new usersActions.LoginUserFail(error)))
        )))
 
    

}