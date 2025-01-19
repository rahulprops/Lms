import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { userLoggedIn, userLoggedOut } from '../authSlice';
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
                    dispatch(userLoggedIn({user:result.data}))
                }catch(e){
                    console.log(e)
                }
            }
            ,
            transformResponse:(data)=>{
                return data.data;
            },
        }),
        loadUser:builder.query({
            query:()=>({
                url:"user/get-user",
                method:"GET"
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try{
                    const result=await queryFulfilled;
                    dispatch(userLoggedIn({user:result.data}))
                }catch(e){
                    console.log(e)
                }
            }
            ,
            transformResponse:(data)=>{
                return data.data
            }
        }),
        updateUser:builder.mutation({
            query:(formData)=>({
                url:"user/update-profile",
                method:"PUT",
                body:formData,
            })
        }),
        logout:builder.query({
            query:()=>({
                url:"user/logout",
                method:"GET"
            }),
            async onQueryStarted(_,{queryFulfilled,dispatch}){
                try{
                    dispatch(userLoggedOut())
                }catch(err){
                    console.log(err)
                }
            }
        })

    })
})
export  const {useRegisterUserMutation,useLoginUserMutation,useLoadUserQuery,useUpdateUserMutation,useLazyLogoutQuery}=authApi