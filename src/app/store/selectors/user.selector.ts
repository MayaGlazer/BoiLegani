import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
//import { getRouterState } from '../../router-store/router.state';
import { getAppState, getRouterState } from '.';
import * as userReducer from '../reducers/user.reducer';
import { AppState } from 'src/app/app-state';
import { User } from '../models/user.model';

// ________selectors_________

// prefsState
export const getUserState = createSelector(getAppState, (state: AppState) => state.user);

export const getUser = createSelector(getUserState, userReducer.getUser);
export const getUserLoading = createSelector(getUserState, userReducer.getUserLoading);

// export const getSelectedUser = createSelector(getUser, getRouterState,
//                             (data, router): User => {
//                                 return router.state && data[router.state.params]
//                             })
