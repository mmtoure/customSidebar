import { useGetGroupsQuery } from "../api/groupApi"

export const useGroups =()=>{
 const {data, isLoading, error} = useGetGroupsQuery()

    return {
        groups: data,
        loading: isLoading,
        error: error
    }
}