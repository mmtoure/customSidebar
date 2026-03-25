import { useGetContractsQuery } from "../api/contractApi"

export const useContracts =()=>{
    const query = useGetContractsQuery();

    return {
        contracts: query.data,
        loading: query.isLoading,
        error: query.error
        
    }
}