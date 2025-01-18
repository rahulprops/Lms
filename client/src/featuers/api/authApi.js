import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { userLoggedIn } from '../authSlice';
const USER_API="http://localhost:9078/api/v1/"
export const authApi=createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:USER_API,
        credentials:"include"
    }),
    endpoints:(builder)=>({
        registerUser:builder.mutation({
            query:(inputData)=>({
                url:"register",
                method:"POST",
                body:inputData
            })
        }),
        loginUser:builder.mutation({
            query:(inputData)=>({
                url:"user/login",
                method:"POST",
                body:inputData
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try{
                    const result=await queryFulfilled;
                    dispatch(userLoggedIn({user:result.data.data}))
                }catch(e){
                    console.log(e)
                }
            }
            ,
            transformResponse:(data)=>{
                return data.data;
            },
        })
    })
})
export  const {useRegisterUserMutation,useLoginUserMutation}=authApi