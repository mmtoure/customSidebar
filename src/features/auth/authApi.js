import { api } from "../../services/api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials
      })
    }),

    getMe: builder.query({
      query: () => "/me"
    })

  })
})

export const {
  useLoginMutation,
  useGetMeQuery
} = authApi