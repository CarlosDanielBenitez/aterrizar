import React from 'react'
import './styles.css'
import { useFetch } from '../../api/useFetch'

export const Custom = () => {
    const { data } = useFetch("https://jsonplaceholder.typicode.com/users")
  return (

       <div className='customer'>
          <ul>
            {data?.map(user =>{ 
            
              <li key={user.id}> {user.id} </li>
            })}
            <li>aaa</li>
          
          </ul>
        </div> 
  )
}
