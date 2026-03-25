import { api } from "../../../services/api";

export const contractApi = api.injectEndpoints({
    endpoints: (builder)=>({
        getContracts: builder.query({
             query: () => "/contracts",
            providesTags: ["Contract"]
        }),
        getContractById: builder.query({
            query: (id) => `/contracts/${id}`,
            providesTags: ["Contract"]

        }),
        createContract: builder.mutation({
             query: (data) => ({
                url: "/contracts",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Contract"]
        }),
        updateContract:  builder.mutation({
            query: (id, ...data) => ({
                url: `/contracts/${id}`,
                method: "PUT",
                body: data
            }),
             invalidatesTags: ["Contract"]
        }),
        deleteContract:  builder.mutation({
            query: (id) => ({
                url: `/groups/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Contract"]
        }),
    })
})

export const {
    useCreateContractMutation,
    useGetContractByIdQuery,
    useUpdateContractMutation,
    useGetContractsQuery
}= contractApi;
