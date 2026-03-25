import React from 'react'
import { useClaims } from '../hooks/useClaims'

const ClaimList = () => {
    const {claims, loading, error} = useClaims();
  return (
    <div>
        {console.log("Claims", claims)
        }
    </div>
  )
}

export default ClaimList