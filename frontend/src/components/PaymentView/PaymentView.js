import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LW0RRCxEL2lkVFBr0irhPmQjefkb0sboLdOZVG3267qhSzZwdokW3tWajCOvNqGpysJ8MZMJrKT1evJZim8w8wD00CnAZRo6Q";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const PaymentView = ({ props }) => {
    let { authTokens, user } = useContext(AuthContext)

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div id="payment-form">
                                    <div className="info-widget">
                                        <h4 className="card-title">Personal Information</h4>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group card-label">
                                                    <label>First Name</label>
                                                    <div className="form-control" type="text" >{user.first_name} </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group card-label">
                                                    <label>Last Name</label>
                                                    <div className="form-control" type="text" >{user.last_name} </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group card-label">
                                                    <label>Email</label>
                                                    <div className="form-control" type="text" >{user.email} </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group card-label">
                                                    <label>Phone</label>
                                                    <div className="form-control" type="text" > 9841000000 </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment-widget">
                                        <h4 className="card-title">Payment Method</h4>
                                        <div className="payment-list">
                                            <label className="credit-card-option">
                                                Credit card
                                            </label>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group card-label">
                                                        <Elements stripe={stripeTestPromise}>
                                                            <CheckoutForm props={props} />
                                                        </Elements>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="col-md-5 col-lg-4 theiaStickySidebar">

                        <div className="card booking-card">
                            <div className="card-header">
                                <h4 className="card-title">Booking Summary</h4>
                            </div>
                            <div className="card-body">

                                <div className="booking-summary">
                                    <div className="booking-item-wrap">
                                        <ul className="booking-date">
                                            <li>Date <span>{props.date}</span></li>
                                            <li>Time <span>{props.time}</span></li>
                                        </ul>
                                        <ul className="booking-fee">
                                            <li>Consulting Fee <span>${props.price}</span></li>
                                        </ul>
                                        <div className="booking-total">
                                            <ul className="booking-total-list">
                                                <li>
                                                    <span>Total</span>
                                                    <span className="total-cost">${props.price}</span>
                                                </li>
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

export default PaymentView