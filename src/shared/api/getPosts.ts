import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_URL } from "../config"

export const getPostsApi = createApi({
  reducerPath: "getPostsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page: number) => `posts?_start=${page*25}&_limit=25`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getPostByid: builder.query({
      query: (id) => `posts/${id}`,
    })
  }),
})
export const { useGetPostsQuery, useGetPostByidQuery } = getPostsApi
