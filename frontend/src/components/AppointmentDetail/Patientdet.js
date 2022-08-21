import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const baseURL = 'https://rshishir.pythonanywhere.com/api/'
const Patientdet = ({ appointment }) => {
    let { authTokens } = useContext(AuthContext)
    const navigate = useNavigate()
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
    return (
        <div className="card-body">
            <div className="doctor-widget">
                <div className="doc-info-left">
                    <div className="doctor-img">
                        <img src={"https://rshishir.pythonanywhere.com/" + appointment.patient.profilepic} className="img-fluid" alt="User Image" />
                    </div>
                    <div className="doc-info-cont">
                        <h4 className="doc-name">{appointment.patient.first_name} {appointment.patient.last_name}</h4>
                        <h6 className="text-muted">{appointment.patient.email}</h6>
                        <div className="user-Location"><i className="fa fa-map-marker"></i> {appointment.patient.address}</div>
                        <div className="user-Location"><i className="fa fa-phone"></i> {appointment.patient.phone}</div>
                    </div>
                </div>
                <div className="doc-info-right">
                    <div className="clinic-booking">
                        {!appointment.doctor ?(

                            <a className="apt-btn" onClick={()=>{
                                cancelAppointment(appointment)
                            }} >Cancel Appointment</a>
                            ):(
                                <></>
                            )
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patientdet