import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store'

export interface RouterStateUrl {
    url: string;
    queryParams: Params,
    params: Params
}

// ________selectors_________

// globalState
export const getAppState = createFeatureSelector<AppState>('state');


// routerState
export const getRouterState = createFeatureSelector<
    fromRouter.RouterReducerState<RouterStateUrl>
    >('routerReducer');

export class CustomSerializer 
implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot) : RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while(state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;

        return { url, queryParams, params };
    }
}