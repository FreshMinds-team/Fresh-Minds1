import React from 'react'
import { Link } from 'react-router-dom'

const BookingSuccess = ({props}) => {
  return (
    <div className="content success-page-cont">
				<div className="container-fluid">
				
					<div className="row justify-content-center">
						<div className="col-lg-6">
						
							<div className="card success-card">
								<div className="card-body">
									<div className="success-cont">
										<i className="fas fa-check"></i>
										<h3>Appointment booked Successfully!</h3>
										<p>Appointment booked on<br /><strong>{props.date} {props.time}</strong></p>
										<Link to={"/invoice"} state={{ props: props }} className="btn btn-primary view-inv-btn">View Invoice</Link>
                                        
									</div>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>		
  )
}

export default BookingSuccess