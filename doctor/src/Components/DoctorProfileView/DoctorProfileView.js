import { Link } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../Context/AuthContext'
import DoctorAbout from './DoctorAbout'
import ProfileHeader from './ProfileHeader'
import DoctorEducation from './DoctorEducation'
import DoctorExperience from './DoctorExperience'
import DoctorExpertise from './DoctorExpertise'
import UpdateDetails from './UpdateDetails'

const baseURL = 'https://rshishir.pythonanywhere.com/api/doctor/details/'
const DoctorProfileView = () => {
	let { user,authTokens } = useContext(AuthContext)
  const [doctor, setdoctor] = useState([]);
    useEffect(() => {
        const fetchdoctor = async () => {
            let response = await fetch(baseURL + user.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            let data = await response.json()
            if (response.status === 200) {
                setdoctor(data)
            }
        };
        fetchdoctor();
    }, []);

    if (!doctor) return null;
	return (
		<div className="page-wrapper">
			<div className="content container-fluid">

				<div className="page-header">
					<div className="row">
						<div className="col">
							<h3 className="page-title">Profile</h3>
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
								<li className="breadcrumb-item active">Profile</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<ProfileHeader user={doctor}/>
						<div className="profile-menu">
							<ul className="nav nav-tabs nav-tabs-solid">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#per_details_tab">About</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#education_tab">Education</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#work_tab">Work & Experience</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#special_tab">Specializations</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#profile_tab">Update Profile</a>
								</li>
							</ul>
						</div>
						<div className="tab-content profile-tab-cont">

							<div className="tab-pane fade show active" id="per_details_tab">
								<DoctorAbout user={doctor}/>
							</div>
							<div id="education_tab" className="tab-pane fade">
								<DoctorEducation user={doctor}/>
							</div>
							<div id="work_tab" className="tab-pane fade">
								<DoctorExperience user={doctor}/>
							</div>
							<div id="special_tab" className="tab-pane fade">
								<DoctorExpertise user={doctor}/>
							</div>
							<div id="profile_tab" className="tab-pane fade">
								<UpdateDetails user={doctor}/>
							</div>

						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default DoctorProfileView