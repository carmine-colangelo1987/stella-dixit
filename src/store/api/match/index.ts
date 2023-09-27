import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {genUrl} from "../../../constants/api";

export const apiMatch = createApi({
  reducerPath: 'match',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_ID}`,
  }),
  endpoints: (builder) => ({
    createNewMatch: builder.query<any, any>({
      query: (variables) => ({
        url: genUrl('newMatch'),
        method: 'POST',
        body: JSON.stringify(variables),
        redirect: 'follow',
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }),
    }),
  }),
});

export const {
  useLazyCreateNewMatchQuery,
} = apiMatch;