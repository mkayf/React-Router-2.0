import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Blogs, { usersInfoLoader } from './components/Blogs.jsx'

// We have two ways to create routers in react-router-dom library:

// First one:
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <App/>,
//     children : [
//       {
//         path : '',
//         element : <Home/>
//       },
//       {
//         path : 'about',
//         element : <About/>
//       }
//     ]
//   }
// ])


// Second one: 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:userid' element={<User/>} />
      <Route path='/blogs' element={<Blogs/>} loader={usersInfoLoader}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}/>  
  </React.StrictMode>,
)
