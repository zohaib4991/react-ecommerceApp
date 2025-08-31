import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewSlice = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.1.6:5000'}),
    tagTypes: ['Reviews'],
    endpoints: builder => ({
        getReviews: builder.query({
            query: () => '/reviews',
            providesTags: ['Reviews']
        }),
    })
})

export const { useGetReviewsQuery } = reviewSlice