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
import AchievementsPage from './Pages/Home/AchievementsPage.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(


    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />

      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />


      {/* Add this line */}
      <Route path="/achievementssection" element={<AchievementsPage />} />


      {/* Protected routes */}
      <Route path="/startupmentorshipsection" element={<ProtectedRoute element={<StartupMentorshipSection />} />} />
      <Route path="/aluminilist" element={<ProtectedRoute element={<UserCards />} />} />
      <Route path="/contribution" element={<ProtectedRoute element={<Contribution />} />} />
      <Route path="/contributearticle" element={<ProtectedRoute element={<ContributeArticle />} />} />


      <Route path='*' element={<h1 className='text-center text-3xl text-bold'>Not Found</h1>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)