import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import PatientProfileView from '../../components/PatientProfileView/PatientProfileView'

const PatientProfile = () => {
  window.scrollTo(0, 0)
  return (
    <div>
        <Header />
        <PatientProfileView />
        <Footer />
    </div>
  )
}

export default PatientProfile