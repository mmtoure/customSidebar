import { useGetClaimsQuery } from "../api/claimApi"

export const useClaims =()=>{
    const {data, isLoading, error} = useGetClaimsQuery();

    return{
        claims: data,
        loading: isLoading,
        error: error
    }
}