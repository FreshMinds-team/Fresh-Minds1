import React from 'react'
import CompletedAppointments from '../../Components/CompletedAppointments/CompletedAppointments'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

const CompletedAppointmentView = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <CompletedAppointments />
    </div>
  )
}

export default CompletedAppointmentView