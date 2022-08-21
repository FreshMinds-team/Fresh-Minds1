import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PaymentView from '../../components/PaymentView/PaymentView'
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
	window.scrollTo(0, 0)
	const location = useLocation()
	const props = location.state;
	return (
	<div>
		<Header />
		<PaymentView props = {props} />
		<Footer />
	</div>
	)
}

export default Payment