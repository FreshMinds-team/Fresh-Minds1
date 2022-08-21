import React from 'react'
import dateFormat from "dateformat"

const DoctorAbout = ({user}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-between">
                            <span>Personal Details</span>
                        </h5>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                            <p className="col-sm-10">{user.first_name} {user.last_name}</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Date Of Birth</p>
                            <p className="col-sm-10">{dateFormat(user.dob, "longDate")}</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
                            <p className="col-sm-10">{user.email}</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
                            <p className="col-sm-10">{user.phone}</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0">Address</p>
                            <p className="col-sm-10 mb-0">{user.address}</p>
                        </div>
                        <div className="row">
                            <p className="col-sm-2 text-muted text-sm-right mb-0">About Me</p>
                            <p className="col-sm-10 mb-0">{user.description}</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default DoctorAbout