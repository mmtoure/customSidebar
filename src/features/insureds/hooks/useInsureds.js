import { useGetInsuredsQuery } from "../api/InsuredApi"

export const useInsureds = ()=>{
    const query = useGetInsuredsQuery();

    return{
        insureds: query.data,
        loading: query.isLoading,
        error: query.error
    }
}