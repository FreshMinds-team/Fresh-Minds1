import React, { useState, useEffect, useContext, useReducer } from 'react'
import AuthContext from '../../Context/AuthContext';
import dateFormat, { masks } from "dateformat";
import { Link } from 'react-router-dom'

const baseURL = 'https://rshishir.pythonanywhere.com/api/'
const OngoingAppointments = () => {
    let { user, authTokens } = useContext(AuthContext)
    const [appointments, setappointments] = useState([]);
    useEffect(() => {        
        fetchappointments();
    }, []);

    const fetchappointments = async () => {
        let response = await fetch(baseURL + 'appointment/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setappointments(data)
        }
    };

    const closeAppointment = async (appointment) => {
        const appointmentData = {
            patient: appointment.patient.id,
            description: appointment.description,
            appointment_time: appointment.appointment_time,
            appointment_date: appointment.appointment_date,
            price: appointment.price,
            doctor: appointment.doctor.id,
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
            fetchappointments()
        }

    };


    return (
        <div className="col-md-12">
            <div className="card card-table">
                <div className="card-header">
                    <Link to='/patients'>
                        <h4 className="card-title">Active appointments</h4>
                    </Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Paid</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map((appointment, index) => {
                                        if (appointment.accepted && !appointment.closed ) {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <Link to='/appointmentdetails' state={{ id:appointment.id }} className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={'https://rshishir.pythonanywhere.com/'+appointment.patient.profilepic} alt="User Image" /></Link>
                                                            <Link to='/appointmentdetails' state={{ id:appointment.id }}>{appointment.patient.first_name} {appointment.patient.last_name}</Link>
                                                        </h2>
                                                    </td>
                                                    <td>{appointment.patient.email}</td>

                                                    <td>{dateFormat(appointment.appointment_date, "fullDate")} <br /><small>{appointment.appointment_time}</small></td>

                                                    <td>${appointment.price}</td>

                                                    <td>
                                                        <div className="appointment-action">
                                                            <a className="btn btn-sm bg-danger-light hover-cursor" onClick={()=>{
                                                                closeAppointment(appointment)
                                                            }}>
                                                                <i className="fas fa-times"></i> End
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OngoingAppointments