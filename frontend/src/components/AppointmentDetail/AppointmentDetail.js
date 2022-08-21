import React from 'react'
import AppointmentListsV from '../PatientProfileView/AppointmentListsV'
import Patientdet from './Patientdet'

const AppointmentDetail = ({ appointment }) => {
    console.log(appointment)
    return (
        <div className="content">
            <div className="container">
                <div className="card">
                    <Patientdet appointment={appointment} />
                </div>

                <div className="card">
                    <div className="card-body pt-0">

                        <nav className="user-tabs mb-4">
                            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#app_overview" data-toggle="tab">Appointment Details</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="tab-content pt-0">

                            <div role="tabpanel" id="app_overview" className="tab-pane fade show active">
                                <AppointmentListsV appointment={appointment} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppointmentDetail