import React, { useState } from 'react'
import data from "./data";
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Videos from '../../components/CalmVideosView/Videos';

const CalmVideos = () => {
  window.scrollTo(0, 0)
    const [videos, setVideos] = useState(data());
    console.log(videos)
  return (
    <div>
        <Header />
        <Videos videos={videos}/>
        <Footer />
    </div>
  )
}

export default CalmVideos