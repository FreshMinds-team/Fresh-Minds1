import React, { useContext,useEffect } from 'react'
import PatientList from './PatientList'
import CompletedAppointmentsHome from './CompletedAppointmentsHome'
import OngoingAppointments from './OngoingAppointments'
import AuthContext from '../../Context/AuthContext'

const HomePageView = () => {
    let { user,logoutUser } = useContext(AuthContext)
    useEffect(()=>{
        if(user.type === 'Patient'){
            logoutUser()
        }
    },[])
    return (
        <div className="page-wrapper">

            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Welcome Dr. {user.first_name} {user.last_name}!</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <OngoingAppointments />
                </div>
                <div className="row">
                    <PatientList />
                    <CompletedAppointmentsHome />
                </div>

            </div>
        </div>
    )
}

export default HomePageView