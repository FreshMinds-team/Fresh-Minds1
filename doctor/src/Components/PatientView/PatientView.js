import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext';
import dateFormat, { masks } from "dateformat";

const baseURL = 'https://rshishir.pythonanywhere.com/api/'
const PatientView = () => {
    let { user ,authTokens } = useContext(AuthContext)
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
            fetchappointments()
        }

    };

    if(!appointments) return null
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Accepted Appointments</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item"><a href="javascript:(0);">Appointments</a></li>
                                <li className="breadcrumb-item active">Accepted</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="datatable table table-hover table-center mb-0">
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
                                                                        <Link to='/appointmentdetails' state={{ id:appointment.id }} >{appointment.patient.first_name}{appointment.patient.last_name}</Link>
                                                                    </h2>
                                                                </td>
                                                                <td>{appointment.patient.email}</td>

                                                                <td>{dateFormat(appointment.appointment_date, "fullDate")} <br /><small>{appointment.appointment_time}</small></td>

                                                                <td>${appointment.price}</td>

                                                                <td>
                                                                    <div className="appointment-action">
                                                                        <a className="btn btn-sm bg-danger-light hover-cursor">
                                                                            <i className="fas fa-check" onClick={()=>{
                                                                                closeAppointment(appointment)
                                                                            }}></i> End
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
                </div>

            </div>
        </div>
    )
}

export default PatientView