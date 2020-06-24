import * as fromPrefs from '../actions/preferences.action';
import { HalakhikPreferences } from '../models/preferences.model';

export interface PrefsState {
    data: HalakhikPreferences;
    loaded: boolean;
    loading: boolean;
}

export const initialState: PrefsState = {
    data: null,
    loaded: false,
    loading: false
}

export function PrefsReducer(
    state = initialState,
    action: fromPrefs.PrefsAction
): PrefsState {

    switch (action.type) {

        case fromPrefs.GET_PREFERENCES: {
            //var data = action.payload;
            return {
                ...state,
                loading: true,
              
            }
        }
        case fromPrefs.GET_PREFERENCES_FAIL: {
            //var data = action.payload;
            return {
                ...state,
                loading: true,
              
            }
        }
        case fromPrefs.GET_PREFERENCES_SUCCESS: {
            console.log(action.payload);
            var data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            }
        }

        case fromPrefs.ADD_PREFERENCES: {
            return Object.assign({}, state, {
                loading: false,
                loaded: true
            })
        }




        
    }

    return state;
}

export const getPrefLoading = (state: PrefsState) => state.loading;
export const getPrefLoaded = (state: PrefsState) => state.loaded;
export const getPrefs = (state: PrefsState) => state;