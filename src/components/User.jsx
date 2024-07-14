import React from 'react'
import {useParams} from 'react-router-dom'
const User = () => {
    const {userid} = useParams();
  return (
    <div className='bg-slate-700 text-white p-4 text-3xl'>
        <p>User: {userid}</p>
    </div>
  )
}

export default User