import React from 'react'
import { useGetInsuredsQuery } from '../api/InsuredApi'
import { useInsureds } from '../hooks/useInsureds'


const InsuredList = () => {
  const {insureds, loading, error} = useInsureds();
  return (
    <div>
      {console.log("Insureds", insureds)
      }
      <h1>Insured List</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {insureds?.content?.map((i) => (
            <tr key={i.id}>
              <td>{i.firstName}</td>
              <td>{i.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default InsuredList