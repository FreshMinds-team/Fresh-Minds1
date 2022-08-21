import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Invoice from '../../components/Invoice/Invoice'
import Title from '../../components/Title/Title'

const InvoicePage = () => {
  window.scrollTo(0, 0)
  const location = useLocation()
  const {props} = location.state
  return (
    <div>
        <Header />
        <Title title="Booking" subtitle="Invoice"/>
        <Invoice props={props}/>
        <Footer />
    </div>
  )
}

export default InvoicePage