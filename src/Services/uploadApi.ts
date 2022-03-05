import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let API_URL = process.env.REACT_APP__API_URL;

export const uploadApi = createApi({
    reducerPath: "uploadApi",
    baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation<any,any>({
        query: (Upload) => ({
          url: `/api/upload`,
          method: "POST",
          body: Upload,
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*"
          },
        }),
      }),
  })
})

export const { useUploadImageMutation } = uploadApi;