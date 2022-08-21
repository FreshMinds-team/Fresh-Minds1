import React, { useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CheckoutForm = ({ props }) => {
    let { authTokens, user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const respons = await axios.post(
                    "https://stripe-server-fresh-minds.herokuapp.com/stripe/charge",
                    {
                        amount: parseInt(props.price)*100,
                        id: id,
                    }
                );
                console.log(respons.data.message)
                if (respons.data.success) {                   

                    const bookAppointment = async (event) => {
                        const appointmentData = {
                            patient: user.user_id,
                            description: props.description,
                            appointment_time: props.time,
                            appointment_date: props.date,
                            price: props.price,
                            payment_id: String(respons.data.message)
                        };
                        let response = await fetch('https://rshishir.pythonanywhere.com/api/appointment/add/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + String(authTokens.access)
                            },
                            body: JSON.stringify(appointmentData)
                        })
                        console.log(appointmentData)
                        
                        if (response.status !== 200) {
                            alert('Something went wrong!')
                        }
                        
                    };
                    
                    bookAppointment()
                    navigate('/success', {
                        state: {
                            props:props
                        }
                    })
                }
            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <CardElement />
            </div>

            <div className="submit-section mt-4">
                <button type="submit" className="btn btn-primary submit-btn">Confirm and Pay</button>
            </div>
        </form>
    );
};