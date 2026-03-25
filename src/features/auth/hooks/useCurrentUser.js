import { useGetMeQuery } from "../authApi"

export const useCurrentuser=()=>{
    const user = useGetMeQuery();
return {
    currentUser: user.data
}
}