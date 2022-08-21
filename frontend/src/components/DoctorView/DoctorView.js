import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Experience from './Experience';
import Expertise from './Expertise';
import Qualification from './Qualification';

function DoctorView() {
    let { doctorId } = useParams();
    const [doctor, setDoctor] = useState();

    useEffect(() => {
        doctorInfo()
    }, [])

    let doctorInfo = async () => {
        let response = await fetch('https://rshishir.pythonanywhere.com/api/doctor/details/' + doctorId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setDoctor(data)
            console.log(data)
        }

    }
    
    if (!doctor) return null;
    return (
        <div className="content">
            <div className="container">

                <div className="card">
                    <div className="card-body">
                        <div className="doctor-widget">
                            <div className="doc-info-left">
                                <div className="doctor-img">
                                    <img src={"https://rshishir.pythonanywhere.com/"+doctor.profilepic} className="img-fluid" alt="User Image" />
                                </div>
                                <div className="doc-info-cont">
                                    <h4 className="doc-name">Dr. {doctor.first_name} {doctor.last_name}</h4>
                                    <p><i className="fas fa-envelope"></i> {doctor.email}</p>
                                    <p><i className="fas fa-map-marker"></i> {doctor.address}</p>
                                    <p><i className="fas fa-phone"></i> {doctor.phone}</p>
                                </div>
                            </div>
                            <div className="doc-info-right">
                                <div className="clini-infos">
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
                                    <a className="nav-link active" data-toggle="tab">Overview</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="tab-content pt-0">

                            <div role="tabpanel" id="doc_overview" className="tab-pane fade show active">
                                <div className="row">
                                    <div className="col-md-12 col-lg-9">

                                        <div className="widget about-widget">
                                            <h4 className="widget-title">About Me</h4>
                                            <p>{doctor.description}</p>
                                        </div>

                                        <Qualification id={doctor.id} />

                                        <Experience id={doctor.id} />

                                        <Expertise id={doctor.id} />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DoctorView