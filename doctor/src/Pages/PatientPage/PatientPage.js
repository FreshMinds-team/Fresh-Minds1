import React from 'react'
import Header from '../../Components/Header/Header'
import PatientView from '../../Components/PatientView/PatientView'
import Sidebar from '../../Components/Sidebar/Sidebar'

const PatientPage = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <PatientView />
    </div>
  )
}

export default PatientPage