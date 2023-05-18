import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Auth from './components/Pages/Auth/Auth'
import Questions from './components/Pages/Question/Questions'
import AskQuestion from './components/Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './components/Pages/Question/displayQuestion'
import Tags from './components/Pages/Tags/Tags'
import Users from './components/Users/Users'
import UserProfile from './components/Pages/UserProfile/UserProfile'
import LoginOtp from './components/otp/LoginOtp'
// import EditProfileForm from './components/Pages/UserProfile/EditProfileForm'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/Auth/LoginOtp' element={<LoginOtp />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
      <Route path='/Tags' element={<Tags />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/Users/:id' element={<UserProfile />} />
      {/* <Route path='/Users/:id' element={<EditProfileForm />} /> */}
    </Routes>
  )
}

export default AllRoutes
