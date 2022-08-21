import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Appointment from '../../components/Appointment/Appointment'

const AppointmentPage = () => {
  window.scrollTo(0, 0)
  return (
    <div>
      <Header />
      <Title title='Appointment' subtitle='Appointment' />
      <Appointment />
      <Footer />
    </div>
  )
}

export default AppointmentPage