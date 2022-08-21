import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const baseURL = 'https://rshishir.pythonanywhere.com/api/'
const AppointmentLists = () => {
    let { authTokens} = useContext(AuthContext)
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

    if (!appointments) return null;
    return (
       <div>
         {
            appointments.map((appointment, index) => {                    
                return (
                    <div className="appointment-list" key={index}>
                        <div className="profile-info-widget">
                            <a href="patient-profile.html" className="booking-doc-img">
                                <img src="/assets/img/patients/patient.jpg" alt="User Image" />
                            </a>
                            <div className="profile-det-info">
                                <h3><a href="patient-profile.html">{appointment.patient.first_name}{appointment.patient.last_name}</a></h3>
                                <div className="patient-details">
                                    <h5><i className="far fa-clock"></i> {appointment.appointment_date} {appointment.appointment_time}</h5>
                                    <h5><i className="fas fa-envelope"></i> {appointment.patient.email}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="appointment-action">
                            <a className="btn btn-sm bg-success-light">
                                <i className="fas fa-check"></i> Accept
                            </a>
                            <a className="btn btn-sm bg-danger-light">
                                <i className="fas fa-times"></i> Cancel
                            </a>
                        </div>
                    </div>
                )
            }
            )
        }
       </div>
    )
}

export default AppointmentLists
