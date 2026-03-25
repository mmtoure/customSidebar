import React from 'react'
import { useGroups } from '../hooks/useGroups'

const GroupList = () => {
    const {groups, loading, error} = useGroups()
  return (
    <div>
        {console.log("Groups", groups)}
    </div>
  )
}

export default GroupList