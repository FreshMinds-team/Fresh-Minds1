import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import RefundInvoice from '../../components/Invoice/RefundInvoice'

const Refund = () => {
    window.scrollTo(0, 0)
    const location = useLocation()
    const {appointment} = location.state

    return (
        <div>
            <Header />
            <RefundInvoice props={appointment}/>
            <Footer />
        </div>
    )
}

export default Refund