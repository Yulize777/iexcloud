import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const pageOne = createApi({
    reducerPath: 'page',
    tagTypes: ['page'],
    baseQuery: fetchBaseQuery({baseUrl:'https://api.iex.cloud/'}),
    endpoints: (build) => ({
        getData: build.query({
            query:(arg) => 'v1/data/core/quote/aapl?token=sk_c6b37a60559d43d387feffb4d93c4db4',
            providesTags: ['page']
        })
    })
})
export const {useGetDataQuery} = pageOne