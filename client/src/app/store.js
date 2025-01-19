import { configureStore } from "@reduxjs/toolkit";
import authReduce from '../featuers/authSlice'
import rootReducer from "./rootReducer";
import { authApi } from "../featuers/api/authApi";
import { forwardRef } from "react";
const store =configureStore({
    reducer:rootReducer,
    middleware:(defaultMiddleware)=>defaultMiddleware().concat(authApi.middleware)
})
export default store;

const initialzeApp= async()=>{
    await store.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initialzeApp();