import React, { useEffect, useState } from 'react'
import dateFormat from "dateformat"

const AppointmentDetailView = ({ appointment }) => {
    const [selectedPackage, setPackage] = useState()

    useEffect(() => {
        switch (appointment.price) {
            case "20":
                setPackage("Chat | 1 Hr Councelling")
                break;
            case "40":
                setPackage("Chat | 2 Hr Councelling")
                break;
            case "200":
                setPackage("Chat | 1 Week Councelling")
                break;
            case "500":
                setPackage("Chat | 4 Week Councelling")
                break;
            default:
                setPackage("Special Package")
        }
    }, [])

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-between">
                            <span>Appointment Details</span>
                        </h5>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Date</p>
                            <p className="col-sm-10">{dateFormat(appointment.appointment_date, "fullDate")}</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Time</p>
                            <p className="col-sm-10">{appointment.appointment_time}</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Package</p>
                            <p className="col-sm-10">{selectedPackage}</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Price</p>
                            <p className="col-sm-10">${appointment.price}</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0">Status</p>
                            <p className="col-sm-10 mb-0">{appointment.accepted ? "Accepted" : "Pending"}<br />
                                {appointment.closed ? "Closed" : "Active"}</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Description</p>
                            <p className="col-sm-10">{appointment.description}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentDetailView