import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BookAppointment = () => {
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        navigate('/payment', {
            state: {
                date: event.target.date.value,
                time: event.target.time.value,
                price: event.target.price.value,
                description: event.target.description.value
            }
        })
    }

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={onSubmitForm} className="schedule-cont">
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Date: </label>
                                    <div className='card'>
                                        <input type='date' name='date' className='form-control' required />
                                    </div>
                                    <label>Time: </label>
                                    <div className='card'>
                                        <input type='time' name='time' className='form-control' required />
                                    </div>
                                    <label>Package: </label>
                                    <div className='card'>
                                        <select name='price' className='form-control' required>
                                            <option value='20'>Chat | 1 Hr Councelling - $20</option>
                                            <option value='40'>Chat | 2 Hr Councelling - $40</option>
                                            <option value='200'>Chat | 1 Week Councelling - $200</option>
                                            <option value='500'>Chat | 4 Week Councelling - $500</option>
                                        </select>
                                    </div>
                                    <label>Description: </label>
                                    <div className='card'>
                                        <textarea name='description' className='form-control' required />
                                    </div>
                                </div>
                            </div>
                            <div className="submit-section proceed-btn text-right">
                                <button type='submit' className="btn btn-primary submit-btn">Proceed to Pay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default BookAppointment