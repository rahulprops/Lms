import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COURSE_API="http://localhost:9078/api/v1/course"

export const courseApi=createApi({
    reducerPath:"courseApi",
    baseQuery:fetchBaseQuery({
        baseUrl:COURSE_API,
        credentials:"include"
    }),
    endpoints:(builer)=>({
        createCourse:builer.mutation({
            query:({coursetitle,category})=>({
                url:"/create",
                method:"POST",
                body:{coursetitle,category}
            }),
            invalidatesTags:['refetch-course']
        }),
        getCourse:builer.query({
            query:()=>({
                url:"getcourse",
                method:"GET"
            }),
            transformResponse:(data)=>{
                return data.data
            },
            providesTags:['refetch-course'],
        })
    }),
});
export const {useCreateCourseMutation,useGetCourseQuery} =courseApi;
