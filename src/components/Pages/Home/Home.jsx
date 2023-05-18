import React from 'react'
import Leftsidebar from '../../Leftsidebar/Leftsidebar'
import Rightsidebar from '../../Rightsidebar/Rightsidebar'
import HomeMainbar from '../../HomeMainbar/HomeMainbar'
import '../../../App.css'

const Home = () => {
  return (

    <div className='home-container-1'>
      <Leftsidebar />
      <div className='home-container-2'>
        <HomeMainbar/>
        <Rightsidebar />
      </div>
    </div>
  )
}

export default Home
