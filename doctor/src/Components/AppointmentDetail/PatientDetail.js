import React from 'react'

const PatientDetail = ({ patient }) => {
  return (
    <div className="profile-header">
      <div className="row align-items-center">
        <div className="col-auto profile-image">
          <a>
            <img className="rounded-circle" alt="User Image" src={'https://rshishir.pythonanywhere.com/'+patient.profilepic} />
          </a>
        </div>
        <div className="col ml-md-n2 profile-user-info">
          <h4 className="user-name mb-0">{patient.first_name} {patient.last_name}</h4>
          <h6 className="text-muted">{patient.email}</h6>
          <div className="user-Location"><i className="fa fa-map-marker"></i> {patient.address}</div>
          <div className="user-Location"><i className="fa fa-phone"></i> {patient.phone}</div>
        </div>        
      </div>
    </div>
  )
}

export default PatientDetail