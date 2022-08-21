import React from 'react'
import AppointmentView from '../../Components/AppointmentView/AppointmentView'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

const AppointmentPage = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <AppointmentView />
    </div>
  )
}

export default AppointmentPage