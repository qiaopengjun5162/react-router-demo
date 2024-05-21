import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api/' }),
    endpoints: builder => ({
        login: builder.mutation({
            query: (user) => ({
                url: 'auth/local/register',
                method: 'POST',
                body: user
            }),
            transformResponse: (response, meta, arg) => {
                return response
            }

        }),
        register: builder.mutation({
            query: (user) => ({
                url: 'auth/local/register',
                method: 'POST',
                body: user
            }),
            transformResponse: (response, meta, arg) => {
                return response
            }
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi

