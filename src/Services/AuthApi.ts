import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let API_URL = process.env.REACT_APP__API_URL 
// let API_URL = 'http://localhost:3001'

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<SigninSignupResponse, UserProfile>({
      query: (UserProfile) => ({
        url: `/api/auth/user/signup`,
        method: "POST",
        body: UserProfile,
      }),
    }),
    signin: builder.mutation<SigninSignupResponse, UserProfile>({
      query: (UserProfile) => ({
        url: `/api/auth/user/signin`,
        method: "POST",
        body: UserProfile,
      }),
    }),
  }),
});

export const { useSignupMutation,useSigninMutation } = authApi;
