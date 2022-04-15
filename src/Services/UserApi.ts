import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let API_URL = process.env.REACT_APP__API_URL;

export const userApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers: any, { getState }) => {
      const token: any = localStorage.getItem("TOKEN");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserProfile, void>({
      query: () => `/api/user`,
    }),
  }),
});

export const { useGetUserInfoQuery } = userApi;
