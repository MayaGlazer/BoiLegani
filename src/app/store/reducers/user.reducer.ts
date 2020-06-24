import * as fromUser from '../actions/user.action';
import { UserState } from '../models/user-state.model';
import { User } from '../models/user.model';

export interface _UserState {
    data: User;
    isLoggedIn: boolean;
    loaded: boolean;
    loading: boolean;
}

export const initialState: _UserState = {
    data: null,
    isLoggedIn: false,
    loaded: false,
    loading: false
}

export function UserReducer(
    state = initialState,
    action: fromUser.UserAction
): _UserState {

    switch (action.type) {

        case fromUser.LOGIN_USER: {
            //var data = action.payload;
            return {
                ...state,
                loading: true,
                data: action.payload,
                isLoggedIn: true
            }
        }
        case fromUser.LOGIN_USER_FAIL: {
            console.log(action.payload);
            var data = action.payload;
            return { ...state, loading: false, loaded: true, data: data, isLoggedIn: false}
        }

        case fromUser.LOGIN_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                isLoggedIn: true
            }
        }




        
    }

    return state;
}

export const getUserLoading = (state: _UserState) => state.loading;
export const getUserLoaded = (state: _UserState) => state.loaded;
export const getUser = (state: _UserState) => state;