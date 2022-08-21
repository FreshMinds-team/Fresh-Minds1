import React from 'react'
import Clinic from './Clinic/Clinic'
import Features from './Features/Features'
import HomeBanner from './HomeBanner/HomeBanner'
import Popular from './Popular/Popular'

const HomeView = () => {
  return (
    <div>
      <HomeBanner />
      <Clinic />
      <Popular/>
      <Features />
    </div>
  )
}

export default HomeView