import { api } from "../../../services/api";

export const insuredApi = api.injectEndpoints({
    endpoints: (builder) =>({
        getInsureds: builder.query({
            query: ()=>"/insureds",
            providesTags: ["Insured"]
        }),

        getInsuredById: builder.query({
            query: (id)=>`insureds/${id}`,
            providesTags: ["Insured"]
        }),

        createInsured: builder.mutation({
            query: (data) =>({
                url: "/insureds",
                method: "POST",
                body: data

            }),
            invalidatesTags: ["Insured"]
        }),

        updateInsured: builder.mutation({
            query: (id, ...data) =>({
                url: `insureds/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Insured"]
        }),

        deleteInsured: builder.mutation({
            query: (id)=>({
                url: `insureds/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Insured"]
        })
    })
})

export const {
  useGetInsuredsQuery,
  useGetInsuredByIdQuery,
  useCreateInsuredMutation,
  useUpdateInsuredMutation,
  useDeleteInsuredMutation
} = insuredApi