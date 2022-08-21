import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import dateFormat from "dateformat"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const baseURL = 'https://rshishir.pythonanywhere.com/api/'
const PatientAppointments = () => {
    let { authTokens, user } = useContext(AuthContext)
    const [appointments, setappointments] = useState([]);
    const navigate = useNavigate()


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

    const cancelAppointment = async (appointment) =>{
        const cancelAppointments = async () => {
            let response = await fetch(baseURL + 'appointment/delete/' + appointment.id, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + String(authTokens.access)
                }
              })
              
            if (response.status === 200) {
                const result = await axios.post(
                    "https://stripe-server-fresh-minds.herokuapp.com/stripe/refund",
                    {
                        amount: parseInt(appointment.price)*100,
                        id: appointment.payment_id,
                    }
                );
                if(result.status=== 200){
                    navigate('/refund', {
                        state: {
                            appointment:appointment
                        }
                    })
                }
            }else{
                console.log(response.error)
            }
        };

        cancelAppointments();
    }
    const titleHandler = (appointment) =>{
        switch (appointment.price) {
            case "20":
                return("Chat | 1 Hr Councelling")
                break;
            case "40":
                return("Chat | 2 Hr Councelling")
                break;
            case "200":
                return("Chat | 1 Week Councelling")
                break;
            case "500":
                return("Chat | 4 Week Councelling")
                break;
            default:
                return("Special Package")
        }
    }

    if (!appointments) return null;
    return (
        <>
            {
                appointments.map((appointment, index) => {
                    if(appointment.patient.email == user.email)
                    return (
                        <div className="location-list">
                            <div className="row">

                                <div className="col-md-4">
                                    <div className="clinic-content">
                                        <h4 className="clinic-name"><Link to='/appointment/detail' state={{appointment:appointment}}>{titleHandler(appointment)}</Link></h4>
                                        <p className="doc-speciality">{appointment.description}</p>
                                        <div className="clinic-details mb-0">
                                            {appointment.doctor ? (
                                                <h5 className="clinic-direction"><Link to={'/doctor/'+appointment.doctor.id}><i className="fas fa-user-md"></i> Dr.{appointment.doctor.first_name} {appointment.doctor.last_name}</Link><br /></h5>
                                            ) : (
                                                <div className="appointment-action">Pending....
                                                    <a onClick={()=>{
                                                        cancelAppointment(appointment)
                                                    }} className="btn btn-sm bg-danger-light">
                                                       <i className="fas fa-times"></i> Cancel
                                                    </a>
                                                </div>
                                            )
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="clinic-timing">
                                        <div>
                                            <p className="timings-days">
                                                <span>{dateFormat(appointment.appointment_date, "longDate")}</span>
                                            </p>
                                            <p className="timings-times">
                                                <span>{appointment.appointment_time}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="consult-price">
                                        ${appointment.price}
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="consult-price">
                                        {!appointment.accepted?"Pending":(
                                            appointment.closed?"Completed":"Ongoing"
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </>
    )
}

export default PatientAppointments
