import React, { useState } from 'react'

const PatientAbout = ({patient}) => {
    const [currPatient,setCurrPatient] = useState(patient)
    return (
    <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-between">
                            <span>Patient Details</span>
                        </h5>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                            <p className="col-sm-10"></p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Date of Birth</p>
                            <p className="col-sm-10">24 Jul 1983</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
                            {/* <p className="col-sm-10">{patient.email}</p> */}
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
                            <p className="col-sm-10">305-310-5857</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0">Address</p>
                            <p className="col-sm-10 mb-0">4663  Agriculture Lane,<br />
                                Miami,<br />
                                Florida - 33165,<br />
                                United States.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
  )
}

export default PatientAbout