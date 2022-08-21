import React from 'react'
import { Link } from 'react-router-dom'
import AppointmentLists from './AppointmentLists'
import AppointmentSidebar from './AppointmentSidebar'

const Appointment = () => {
    return (
        <div className="content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

                        <div className="profile-sidebar">
                            <div className="widget-profile pro-widget-content">
                                <div className="profile-info-widget">
                                    <a href="#" className="booking-doc-img">
                                        <img src="/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                    </a>
                                    <div className="profile-det-info">
                                        <h3>Dr. Darren Elder</h3>

                                        <div className="patient-details">
                                            <h5 className="mb-0">Psychiatrist</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-widget">
                                <AppointmentSidebar />
                            </div>
                        </div>

                    </div>

                    <div className="col-md-7 col-lg-8 col-xl-9">
                        <div className="appointments">

                            <AppointmentLists />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Appointment