import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURI = 'http://127.0.0.1:5000'
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    endpoints: (builder) => ({
        //get categories
        getCategories: builder.query({
            query: () => '/api/categories',
            providesTags:['categories']
        }),
        //get labels
        getLabels: builder.query({
            query: () => '/api/labels',
            providesTags:['transaction']
        }),

        // add transaction
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
                url: '/api/add/transaction',
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        //delete record
        deleteTransaction: builder.mutation({
            query: recordId => ({
                url: '/api/transaction',
                method: "Delete",
                body: recordId
            }),
            invalidatesTags: ['transaction']
        })

    })
})

export default apiSlice