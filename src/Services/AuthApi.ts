import { createApi, fetchBaseQuery ,BaseQueryFn,FetchArgs} from '@reduxjs/toolkit/query/react';

let API_URL = process.env.REACT_APP__API_URL

export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl:API_URL,
    }),
    endpoints:(builder)=>({
        signup:builder.mutation<void,UserProfile>({
             query:(UserProfile) => ({
                 url:`/api/auth/user/signup`,
                 method:'POST',
                 body:UserProfile
             })
        }),
    })
})


export const { useSignupMutation } = authApi