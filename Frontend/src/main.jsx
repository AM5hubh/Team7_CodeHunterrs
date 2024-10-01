import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Auth/Login/Login.jsx'
import Signup from './Pages/Auth/Signup/Signup.jsx'
import StartupMentorshipSection from './Pages/Home/StartupMentorshipSection.jsx'
import Contribution from './Pages/Alumini/Contribution.jsx'
import UserCards from './Pages/Alumini/UserCards.jsx'
import ContributeArticle from './Pages/Alumini/ContributeArticle.jsx'
import Register from '../src/events/RegisterPage.jsx'
import KnowMore from '../src/events/KnowMorePage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(


    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />

      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path="/contribution" element={<Contribution />} />
      <Route path="/contributearticle" element={<ContributeArticle />} />

      {/* Add this line */}
      <Route path="/startupmentorshipsection" element={<StartupMentorshipSection />} />
      <Route path="/aluminilist" element={<UserCards />} />

      <Route path="/events/register/:eventId" element={<Register />} />
      <Route path="/events/knowmore/:eventId" element={<KnowMore />} />


      <Route path='*' element={<h1 className='text-center text-3xl text-bold'>Not Found</h1>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)