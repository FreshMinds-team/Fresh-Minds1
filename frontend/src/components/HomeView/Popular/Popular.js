import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

const baseURL = 'https://rshishir.pythonanywhere.com/api/doctor/'
const Popular = () => {
	const [doctors, setdoctors] = useState([]);
    useEffect(() => {
        const fetchdoctors = async () => {
            let response = await fetch(baseURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            let data = await response.json()
            if (response.status === 200) {
                setdoctors(data)
            }
        };

        fetchdoctors();
    }, []);

    if (!doctors) return null;
    return (
        <section className="section section-doctor margin-temp">
				<div className="container-fluid">
				   <div className="row">
						<div className="col-lg-4">
							<div className="section-header ">
								<h2>Book Our Doctor</h2>
								<p>Lorem Ipsum is simply dummy text </p>
							</div>
							<div className="about-content">
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
								<p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>					
								<a href="javascript:;">Read More..</a>
							</div>
						</div>
						<div className="col-lg-8 custom-width">
							<Carousel className="doctor-slider slider">
								
							{
                        doctors.map((doctor, index) => {
                            return (
								<div key={index} className="profile-widget">
									<div className="doc-img">
										<Link to={"/doctor/"+doctor.id}>
											<img className="img-fluid fixed-size" alt="User Image" src={"https://rshishir.pythonanywhere.com/"+doctor.profilepic} />
										</Link>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link to={"/doctor/"+doctor.id}>{doctor.first_name} {doctor.last_name}</Link> 
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">Psychiatrist</p>
										<div className="row row-sm flex-gara">
											<div >
												<Link to={"/doctor/"+doctor.id} className="btn book-btn">View Profile</Link>
											</div>
											<div >
												<Link to="/appointment/book" className="btn book-btn">Request an Appointment</Link>
											</div>
										</div>
									</div>
								</div>
							)} 
						)}
								
							</Carousel>
						</div>
				   </div>
				</div>
			</section>
    )
}

export default Popular