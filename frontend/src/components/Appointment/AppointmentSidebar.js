import React from 'react'
import { Link } from 'react-router-dom'

function AppointmentSidebar() {
    return (
        <nav className="dashboard-menu">
            <ul>
                <li>
                    <Link to="/appointment">
                        <i className="fas fa-calendar-check"></i>
                        <span>Appointments</span>
                    </Link>
                </li>
                <li>
                    <Link to="/patients">
                        <i className="fas fa-users"></i>
                        <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/chat">
                        <i className="fas fa-comments"></i>
                        <span>Message</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default AppointmentSidebar