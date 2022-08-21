import React from 'react'
import Header from '../../Components/Header/Header'
import HomePageView from '../../Components/HomePageView/HomePageView'
import Sidebar from '../../Components/Sidebar/Sidebar'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <HomePageView />
    </div>
  )
}

export default HomePage