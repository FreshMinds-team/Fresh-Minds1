import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import dateFormat from "dateformat"
import PatientAppointments from './PatientAppointments'

const PatientProfileView = () => {
    const url = "https://rshishir.pythonanywhere.com/media/"
    let { user } = useContext(AuthContext)

    if (!user) return null
    return (
        <div className="content">
            <div className="container">

                <div className="card">
                    <div className="card-body">
                        <div className="doctor-widget">
                            <div className="doc-info-left">
                                <div className="doctor-img">
                                    <img src={url+user.profilepic} className="img-fluid" alt="User Image" />
                                </div>
                                <div className="doc-info-cont">
                                    <h4 className="doc-name">{user.first_name} {user.last_name} {user.gender ==='Male'?(
                                        <i className="fas fa-mars"></i>
                                    ):(
                                        user.gender === 'Female'?(
                                            <i className="fas fa-venus"></i>
                                        ):(
                                            <i className="fas fa-genderless"></i>
                                        )
                                    )
                                    }
                                    </h4>
                                    <p><i className="fas fa-envelope"></i> {user.email}</p>
                                    <p><i className="fas fa-map-marker"></i> {user.address}</p>
                                    <p><i className="fas fa-phone"></i> {user.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body pt-0">

                        <nav className="user-tabs mb-4">
                            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#patient_about" data-toggle="tab">Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#appointment_lists" data-toggle="tab">Appointments</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="tab-content pt-0">


                            <div role="tabpanel" id="patient_about" className="tab-pane fade show active">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title d-flex justify-content-between">
                                                    <span>Personal Details</span>
                                                </h5>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                                                    <p className="col-sm-10">{user.first_name} {user.last_name}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Date Of Birth</p>
                                                    <p className="col-sm-10">{dateFormat(user.dob, "longDate")}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
                                                    <p className="col-sm-10">{user.email}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
                                                    <p className="col-sm-10">{user.phone}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted text-sm-right mb-0">Address</p>
                                                    <p className="col-sm-10 mb-0">{user.address}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>

                            <div role="tabpanel" id="appointment_lists" className="tab-pane fade">

                                <PatientAppointments />

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PatientProfileView