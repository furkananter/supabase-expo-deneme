
import { AuthState } from './types'
import { AuthActionTypes } from './actions'
import { Reducer } from 'redux';


const initialState: AuthState = {
    isLoading: false,
    isLoggedIn: false,
    user: null,
};

const authReducer: Reducer<AuthState, AuthActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLoading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: action.payload,
                error: null,
                message: null,
                token: action.payload.token,
                refreshToken: action.payload.refreshToken,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                user: null,
                error: action.payload.error,
                message: action.payload
                    .message,
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                user: null,
                error: null,
                message: null,
                token: null,
                refreshToken: null,
            };
        default:
            return state;
    }
};

export default authReducer
export {
    initialState,
}


