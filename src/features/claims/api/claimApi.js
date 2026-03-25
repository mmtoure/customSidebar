import { api } from "../../../services/api";

export const claimApi = api.injectEndpoints({
    endpoints: (builder)=>({
        getClaims: builder.query({
             query: () => "/claims",
            providesTags: ["Claim"]
        }),
        getClaimByid: builder.query({
            query: (id) => `/claims/${id}`,
           providesTags: ["Claim"]

        }),
        createClaim: builder.mutation({
             query: (data) => ({
                url: "/claims",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Claim"]
        }),
        updateClaim:  builder.mutation({
            query: (id, ...data) => ({
                url: `/claims/${id}`,
                method: "PUT",
                body: data
            }),
             invalidatesTags: ["Claim"]
        }),
        deleteClaim:  builder.mutation({
            query: (id) => ({
                url: `/claims/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Claim"]
        }),
    })
})
export const{
 useCreateClaimMutation,
 useGetClaimByidQuery,
 useDeleteClaimMutation,
 useUpdateClaimMutation,
 useGetClaimsQuery
} = claimApi;