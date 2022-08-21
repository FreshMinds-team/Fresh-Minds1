import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppointmentDetailView from './AppointmentDetailView';
import PatientDetail from './PatientDetail';

const baseURL = 'https://rshishir.pythonanywhere.com/api/'
const AppointmentDetail = () => {
    const location = useLocation()
    const { id } = location.state
    let { user, authTokens } = useContext(AuthContext)
    const [appointment, setappointment] = useState({});
    const [patient, setPatient] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchappointment();
    }, []);

    const fetchappointment = async () => {
        let response = await fetch(baseURL + 'appointment/details/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setappointment(data)
        }
    };

    useEffect(() => {
        setPatient(appointment.patient)
        if (appointment.doctor && appointment.doctor.username !== user.username) {
            navigate('/')
        }
    }, [appointment]);

    const closeAppointment = async () => {
        const appointmentData = {
            patient: appointment.patient.id,
            description: appointment.description,
            appointment_time: appointment.appointment_time,
            appointment_date: appointment.appointment_date,
            price: appointment.price,
            doctor: user.id,
            accepted: appointment.accepted,
            closed: true
        };
        let response = await fetch('https://rshishir.pythonanywhere.com/api/appointment/update/'+appointment.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify(appointmentData)
        })
        if (response.status === 200) {
            fetchappointment()
        }

    };

    const acceptAppointment = async () => {
        console.log(55)
        const appointmentData = {
            patient: patient.id,
            description: appointment.description,
            appointment_time: appointment.appointment_time,
            appointment_date: appointment.appointment_date,
            price: appointment.price,
            doctor: user.id,
            accepted: true,
            closed: appointment.closed
        };
        let response = await fetch('https://rshishir.pythonanywhere.com/api/appointment/update/'+appointment.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify(appointmentData)
        })
        if (response.status === 200) {
            fetchappointment()
        }

    };


    if (!patient || !appointment) return null
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <h3 className="page-title">Appointment</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item">Appointment</li>
                                <li className="breadcrumb-item active">Detail</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <PatientDetail patient={patient} />
                        <div className="profile-menu row-flex">
                            <div>
                                <ul className="nav nav-tabs nav-tabs-solid">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#appointment_details_tab">Appointment Details</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-auto profile-btn">
                                {appointment.accepted ?
                                    appointment.closed ?
                                        null
                                        : (
                                            <a className="btn btn-danger" onClick={closeAppointment}>
                                                Close
                                            </a>
                                        ) : (
                                        <a className="btn btn-success" onClick={acceptAppointment}>
                                            Accept
                                        </a>
                                    )}

                            </div>
                        </div>
                        <div className="tab-content profile-tab-cont">

                            <div className="tab-pane fade show active" id="appointment_details_tab">
                                <AppointmentDetailView appointment={appointment} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppointmentDetail