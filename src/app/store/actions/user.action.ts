import { Action } from '@ngrx/store'
import { CalendarEvent } from '../models/calendar-event.model'
import { User } from '../models/user.model';


export const LOGIN_USER = '[User] Login User';
export const LOGIN_USER_FAIL = '[User] Login User Failed';
export const LOGIN_USER_SUCCESS = '[User] Login User Successful';
export const SIGNUP_USER = '[User] Sign-Up New User';
export const SIGNUP_USER_FAIL = '[User] Sign-Up New User Failed';
export const SIGNUP_USER_SUCCESS = '[User] Sign-Up New User Successful';
export const GET_USER = '[User] Get User';
export const GET_USER_FAIL = '[User] Get User Failed';
export const GET_USER_SUCCESS = '[User] Get User Successful';


export class LoginUser implements Action {
    readonly type = LOGIN_USER;
    constructor(public payload: any) { }
}

export class LoginUserFail implements Action {
    readonly type = LOGIN_USER_FAIL;
    constructor(public payload: any) { }
}

export class LoginUserSuccess implements Action {
    readonly type = LOGIN_USER_SUCCESS;
    constructor(public payload: User) { }
}

export class SignUpUser implements Action {
    readonly type = SIGNUP_USER;
    constructor(public payload: User) { }
}

export class SignUpFail implements Action {
    readonly type = SIGNUP_USER_FAIL;
    constructor(public payload: any) { }
}

export class SignUpSuccess implements Action {
    readonly type = SIGNUP_USER_SUCCESS;
    constructor(public payload: User) { }
}

export class GetUser implements Action {
    readonly type = GET_USER;
    constructor() { }
}

export class GetUserFail implements Action {
    readonly type = GET_USER_FAIL;
    constructor(public payload: any) { }
}

export class GetUserSuccess implements Action {
    readonly type = GET_USER_SUCCESS;
    constructor(public payload: User) { }
}

 
export type UserAction = LoginUser | LoginUserFail | LoginUserSuccess | SignUpUser |
                        SignUpFail | SignUpSuccess | GetUser | GetUserFail | GetUserSuccess;