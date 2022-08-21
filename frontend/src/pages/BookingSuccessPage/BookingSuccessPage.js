import React from 'react'
import { useLocation } from 'react-router-dom'
import BookingSuccess from '../../components/BookingSuccess/BookingSuccess'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'

const BookingSuccessPage = () => {
    window.scrollTo(0, 0)
    const location = useLocation()
    const {props} = location.state;
    return (
        <div>
            <Header />
            <Title title="Booking" subtitle="Success"/>
            <BookingSuccess props={props} />
            <Footer />
        </div>
    )
}

export default BookingSuccessPage