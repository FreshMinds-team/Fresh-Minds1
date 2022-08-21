import React from 'react'
import DoctorProfileView from '../../Components/DoctorProfileView/DoctorProfileView'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

const DoctorProfile = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <DoctorProfileView />
    </div>
  )
}

export default DoctorProfile