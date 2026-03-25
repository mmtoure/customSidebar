import { api } from "../../../services/api";

export const groupApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getGroups: builder.query({
            query: () => "/groups",
            providesTags: ["Group"]
        }),

        getGroupById: builder.query({
            query: (id) => `/groups/${id}`,
            providesTags: ["Group"]
        }),

        createGroup: builder.mutation({
            query: (data) => ({
                url: "/groups",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Group"]
        }),

        updateGroup: builder.mutation({
            query: (id, ...data) => ({
                url: `/groups/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Group"]

        }),

        deleteGroup: builder.mutation({
            query: (id) => ({
                url: `/groups/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Group"]
        })


    })
})

export const {
    useGetGroupsQuery,
    useGetGroupByIdQuery,
    useCreateGroupMutation,
    useUpdateGroupMutation,
    useDeleteGroupMutation
} = groupApi;