import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Patient from '../../components/Patient/Patient'
import Title from '../../components/Title/Title'

const PatientPage = () => {
  window.scrollTo(0, 0)
  return (
    <div>
        <Header />
        <Title title='Patients' subtitle='Patients' />
        <Patient />
        <Footer />
    </div>
  )
}

export default PatientPage