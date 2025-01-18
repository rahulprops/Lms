import {combineReducers} from '@reduxjs/toolkit'
import { authApi } from '../featuers/api/authApi'
import authReducer from '../featuers/authSlice'
const rootReducer=combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    auth:authReducer
});
export default rootReducer;