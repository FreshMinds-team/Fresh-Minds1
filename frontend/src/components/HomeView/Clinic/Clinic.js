import React from 'react'
import Carousel from 'react-elastic-carousel';

const Clinic = () => {
    return (
        <section className="section section-specialities">
            <div className="container-fluid">
                <div className="section-header text-center">
                    <h2>Mental Health Conditions We Treat</h2>
                    <p className="sub-title">
                        The internet can be a way to understand your mental health
                        condition or treatment, connect with other people or access
                        therapy.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <Carousel className="specialities-slider slider">

                            <div className="speicality-item text-center">
                                <div className="speicality-img">
                                    <img
                                        src="assets/img/specialities/specialities-01.png"
                                        className="img-fluid"
                                        alt="Speciality"
                                    />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div>
                                <p>ANXIETY DISORDER</p>
                            </div>



                            <div className="speicality-item text-center">
                                <div className="speicality-img">
                                    <img
                                        src="assets/img/specialities/specialities-02.png"
                                        className="img-fluid"
                                        alt="Speciality"
                                    />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div>
                                <p>DEPRESSIVE DISORDER</p>
                            </div>



                            <div className="speicality-item text-center">
                                <div className="speicality-img">
                                    <img
                                        src="assets/img/specialities/specialities-03.png"
                                        className="img-fluid"
                                        alt="Speciality"
                                    />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div>
                                <p>PANIC DISORDER</p>
                            </div>



                            <div className="speicality-item text-center">
                                <div className="speicality-img">
                                    <img
                                        src="assets/img/specialities/specialities-04.png"
                                        className="img-fluid"
                                        alt="Speciality"
                                    />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div>
                                <p>PHOBIA</p>
                            </div>



                            <div className="speicality-item text-center">
                                <div className="speicality-img">
                                    <img
                                        src="assets/img/specialities/specialities-05.png"
                                        className="img-fluid"
                                        alt="Speciality"
                                    />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div>
                                <p>SOCIAL ANXIETY</p>
                            </div>

                            <div className="speicality-item text-center">
                                <div className="speicality-img">
                                    <img
                                        src="assets/img/specialities/specialities-05.png"
                                        className="img-fluid"
                                        alt="Speciality"
                                    />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div>
                                <p>OCD</p>
                            </div>

                        </Carousel>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clinic