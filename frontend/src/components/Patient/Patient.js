import React from 'react'
import AppointmentSidebar from '../Appointment/AppointmentSidebar'

const Patient = () => {
  return (
    <div className="content">
				<div className="container-fluid">

					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						
							<AppointmentSidebar />
							
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9">
						
							<div className="row row-grid">								
								
								<div className="col-md-6 col-lg-4 col-xl-3">
									<div className="card widget-profile pat-widget-profile">
										<div className="card-body">
											<div className="pro-widget-content">
												<div className="profile-info-widget">
													<a href="#" className="booking-doc-img">
														<img src="assets/img/patients/patient11.jpg" alt="User Image" />
													</a>
													<div className="profile-det-info">
														<h3>Harry Williams</h3>
														<div className="patient-details">
                                                            
														</div>
													</div>
												</div>
											</div>
											<div className="patient-info">
												<ul>
													<li>Email <span>+1 303 607 7075</span></li>
													<li>Age <span>9 Years, Male</span></li>
													<li>Gender <span>Male</span></li>
													<li>Enrolled <span>Date</span></li>
												</ul>
											</div>
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

export default Patient