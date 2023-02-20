// create the redux toolkit store

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth';
import { userReducer } from './user';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    form: formReducer,
});
export const store = configureStore({
    reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;



