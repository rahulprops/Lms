import {combineReducers} from '@reduxjs/toolkit'
import { authApi } from '../featuers/api/authApi'
import authReducer from '../featuers/authSlice'
import { courseApi } from '../featuers/api/courseApi';
const rootReducer=combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [courseApi.reducerPath]:courseApi.reducer,
    auth:authReducer
});
export default rootReducer;