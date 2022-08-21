import React from 'react'
import Carousel from 'react-elastic-carousel';

const Features = () => {
    return (
        <section className="section section-features">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 features-img">
                        <img
                            src="assets/img/features/feature.png"
                            className="img-fluid"
                            alt="Feature"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="section-header">
                            <h2 className="mt-2">Availabe Features in Our Website</h2>
                            <p>
                                It’s clear the times are changing and digital revolution is
                                spreading in almost all areas of work, including psychology.
                                With its arrival, comes the surge in interest in online
                                therapy.
                            </p>
                        </div>
                        <Carousel className="features-slider slider">
                            <div className="feature-item text-center">
                                <img
                                    src="assets/img/features/feature-01.jpg"
                                    className="img-fluid"
                                    alt="Feature"
                                />
                                <p>Eliminate Commute Time</p>
                            </div>
                            <div className="feature-item text-center">
                                <img
                                    src="assets/img/features/feature-02.jpg"
                                    className="img-fluid"
                                    alt="Feature"
                                />
                                <p>Professional facilitation</p>
                            </div>
                            <div className="feature-item text-center">
                                <img
                                    src="assets/img/features/feature-03.jpg"
                                    className="img-fluid"
                                    alt="Feature"
                                />
                                <p>Video & chat support</p>
                            </div>
                            <div className="feature-item text-center">
                                <img
                                    src="assets/img/features/feature-04.jpg"
                                    className="img-fluid"
                                    alt="Feature"
                                />
                                <p>Online Scheduling</p>
                            </div>
                            <div className="feature-item text-center">
                                <img
                                    src="assets/img/features/feature-05.jpg"
                                    className="img-fluid"
                                    alt="Feature"
                                />
                                <p>Affordable pricing</p>
                            </div>
                            <div className="feature-item text-center">
                                <img
                                    src="assets/img/features/feature-06.jpg"
                                    className="img-fluid"
                                    alt="Feature"
                                />
                                <p>Always accessible</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features