import React from 'react'
import { useContracts } from '../hooks/useContracts'

const ContractList = () => {
    const {contracts} = useContracts();
  return (
    <div>
        {console.log("Contracts", contracts)
        }
    </div>
  )
}

export default ContractList