import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const url = "https://rshishir.pythonanywhere.com/media/"
const Header = () => {
	const baseURL = 'https://rshishir.pythonanywhere.com/api/'
	let { authTokens, logoutUser, user } = useContext(AuthContext)
	const [appointment, setappointment] = useState({})
	if (user) {
		if (user.type === 'Doctor') {
			logoutUser()
		}
	}
	useEffect(() => {
		if (user) {
			const fetchappointments = async () => {
				let response = await fetch(baseURL + 'appointment/pending/' + user.id, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + String(authTokens.access)
					}
				})
				let data = await response.json()
				if (response.status === 200) {
					setappointment(data[0])
					console.log(data[0])
				}
			};
			fetchappointments();
		}
	}, []);

	return (
		<header className="header">
			<nav className="navbar navbar-expand-lg header-nav">
				<div className="navbar-header">
					<a id="mobile_btn">
						<span className="bar-icon">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</a>
					<Link to="/" className="navbar-brand logo">
						<img src="/assets/img/logo.png" className="img-fluid" alt="Logo" />
					</Link>
				</div>
				<div className="main-menu-wrapper">
					<div className="menu-header">
						<Link to="/" className="menu-logo">
							<img src="/assets/img/logo.png" className="img-fluid" alt="Logo" />
						</Link>
						<a id="menu_close" className="menu-close">
							<i className="fas fa-times"></i>
						</a>
					</div>
					<ul className="main-nav">
						<li className="active">
							<Link to="/">Home</Link>
						</li>
						{user ? (
							<li>{appointment ? (
								<Link to='/appointment/detail' state={{ appointment: appointment }}>View Appointment</Link>
							) : (
								<Link to="/appointment/book">Request an appointment</Link>
							)}</li>) : (
							<li><Link to="/Login">Request an appointment</Link></li>
						)}

						<li>
							<Link to="/chat">Chat</Link>
						</li>
						<li><Link to="/meditation">Meditation</Link></li>
						<li><Link to="/news">News</Link></li>
						<li><Link to="/calmvideos">Video Therapy</Link></li>

					</ul>
				</div>
				<ul className="nav header-navbar-rht">


					{
						!user ? (
							<li className="nav-item">
								<Link className="nav-link header-login" to="/login">login / Signup </Link>
							</li>
						) : (
							<li className="nav-item dropdown has-arrow">
								<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
									<span className="user-img"><img className="rounded-circle" src={url + user.profilepic} width="31" /></span>
								</a>
								<div className="dropdown-menu">
									<div className="user-header">
										<div className="avatar avatar-sm">
											<img src={url + user.profilepic} alt="User Image" className="avatar-img rounded-circle" />
										</div>
										<div className="user-text">
											<h6>{user.first_name} {user.last_name}</h6>
											<p className="text-muted mb-0">{user.username}</p>
										</div>
									</div>
									<Link className="dropdown-item" to="/profile">My Profile</Link>
									<a className="dropdown-item" onClick={logoutUser}>Logout</a>
								</div>
							</li>
						)}
					<li className="nav-item contact-item">
						<div className="header-contact-img">
							<i className="far fa-hospital"></i>
						</div>
						<div className="header-contact-detail">
							<p className="contact-header">Contact</p>
							<p className="contact-info-header"> +977-01-49652770</p>
						</div>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
