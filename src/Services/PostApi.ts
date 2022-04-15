import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";

let API_URL = process.env.REACT_APP__API_URL;

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPost: builder.query<any, void>({
      query: () => ({
        url: `/api/post/v1`,
        method: "GET",
        // params: {
        //   page: params.page,
        // },
      }),
    }),
  }),
});

export const {useGetPostQuery} = postApi