import React from 'react'
import DoctorView from '../../components/DoctorView/DoctorView'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'

const DoctorViewPage = () => {
  window.scrollTo(0, 0)
  return (
    <div>
        <Header />
        <Title title="Doctor" subtitle="Doctor"/>
        <DoctorView />
        <Footer />
    </div>
  )
}

export default DoctorViewPage