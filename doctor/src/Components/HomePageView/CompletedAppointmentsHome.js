import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext';
import dateFormat, { masks } from "dateformat"

const baseURL = 'https://rshishir.pythonanywhere.com/api/'
const CompletedAppointmentsHome = () => {
    let { user, authTokens } = useContext(AuthContext)
    const [appointments, setappointments] = useState([]);

    useEffect(() => {
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

        fetchappointments();
    }, []);
    if(!appointments) return null
    return (
        <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
                <div className="card-header">
                    <Link to='/completed'>
                        <h4 className="card-title">Completed appointments</h4>
                    </Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Date</th>
                                    <th>Paid</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map((appointment, index) => {
                                        if (appointment.accepted && appointment.closed) {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <Link to='/appointmentdetails' state={{ id:appointment.id }} className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={'https://rshishir.pythonanywhere.com/'+appointment.patient.profilepic} alt="User Image" /></Link>
                                                            <Link to='/appointmentdetails' state={{ id:appointment.id }}>{appointment.patient.first_name} {appointment.patient.last_name}</Link>
                                                        </h2>
                                                    </td>
                                                    <td>{dateFormat(appointment.appointment_date, "fullDate")} <br /><small>{appointment.appointment_time}</small></td>
                                                    <td>${appointment.price}</td>
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

export default CompletedAppointmentsHome