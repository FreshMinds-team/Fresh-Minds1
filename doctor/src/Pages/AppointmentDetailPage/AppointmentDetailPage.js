import React from 'react'
import AppointmentDetail from '../../Components/AppointmentDetail/AppointmentDetail'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

const AppointmentDetailPage = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <AppointmentDetail />
    </div>
  )
}

export default AppointmentDetailPage