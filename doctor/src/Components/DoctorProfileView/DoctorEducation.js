import AuthContext from '../../Context/AuthContext'
import React, { useState, useEffect, useContext } from 'react'

const baseURL = 'https://rshishir.pythonanywhere.com/api/qualification/'
const DoctorEducation = () => {
    let { user } = useContext(AuthContext)
    const [qualifications, setQualifications] = useState([]);
    useEffect(() => {
        const fetchQualifications = async () => {
            let response = await fetch(baseURL + user.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            let data = await response.json()
            if (response.status === 200) {
                setQualifications(data)
            }
        };

        fetchQualifications();
    }, []);

    if (!qualifications) return null;
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="widget-title">Education</h4>
                        <div className="experience-box">
                            <ul className="experience-list">
                                {
                                    qualifications.map((qualification, index) => {
                                        return (
                                            <li key={index}>
                                                <div className="experience-user">
                                                    <div className="before-circle"></div>
                                                </div>
                                                <div className="experience-content">
                                                    <div className="timeline-content">
                                                        <a className="name">{qualification.title}</a>
                                                        <div>{qualification.institution}</div>
                                                        <span className="time">{qualification.date}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                    )}

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document" >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Personal Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row form-row">
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" className="form-control" value={user.first_name} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control" value={user.last_name} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Date of Birth</label>
                                                <div className="form-group">
                                                    <input type="date" className="form-control" value="24-07-1983" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label>Email ID</label>
                                                <input type="email" className="form-control" value={user.email} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label>Mobile</label>
                                                <input type="text" value="+1 202-555-0125" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <h5 className="form-title"><span>Address</span></h5>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control" value="4663 Agriculture Lane" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input type="text" className="form-control" value="Miami" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label>State</label>
                                                <input type="text" className="form-control" value="Florida" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label>Zip Code</label>
                                                <input type="text" className="form-control" value="22434" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <input type="text" className="form-control" value="United States" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default DoctorEducation