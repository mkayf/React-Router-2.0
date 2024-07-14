import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Blogs = () => {
    const data = useLoaderData();

  return (
    <div style={{display: 'flex', justifyContent : 'center'}}> 
    <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {
           data ? data.map((user,idx) => {
            return  <tr key={idx}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
            </tr>
        })
        : 
        ''
            
        }
        </tbody>
        </table>
    </div>
  )
}

export default Blogs

export const usersInfoLoader = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data =  await response.json();
    return data;
}