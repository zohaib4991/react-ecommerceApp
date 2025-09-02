import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewSlice = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://68b66b40e5dc090291b19df5.mockapi.io/api'}),
    tagTypes: ['Reviews'],
    endpoints: builder => ({
        getReviews: builder.query({
            query: () => '/reviews',
            providesTags: ['Reviews']
        }),
    })
})

export const { useGetReviewsQuery } = reviewSlice