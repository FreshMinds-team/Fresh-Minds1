import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

const Sidebar = () => {
	let { logoutUser, user } = useContext(AuthContext)
  return (
    <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
					<div id="sidebar-menu" className="sidebar-menu">
						<ul>
							<li className="menu-title"> 
								<span>Main</span>
							</li>
							<li> 
								<Link to="/"><i className="fe fe-home"></i> <span>Home</span></Link>
							</li>							
							<li> 
								<Link to="/chat"><i className="fe fe-mail"></i> <span>Chat</span></Link>
							</li>							
							<li className="menu-title"> 
								<span>Appointments</span>
							</li>
							<li> 
								<Link to="/appointments"><i className="fe fe-clock"></i> <span>Pending</span></Link>
							</li>
							<li> 
								<Link to="/patients"><i className="fe fe-check"></i> <span>Accepted</span></Link>
							</li>
							<li> 
								<Link to="/completed"><i className="fe fe-check-circle"></i> <span>Completed</span></Link>
							</li>
							<li className="menu-title"> 
								<span>User Actions</span>
							</li>
							<li> 
								<Link to="/profile"><i className="fe fe-user"></i> <span>Profile</span></Link>
							</li>
							<li> 
								<a className='temp-a' onClick={logoutUser}><i className="fe fe-logout"></i> <span>Logout</span></a>
							</li>
						</ul>
					</div>
                </div>
            </div>
  )
}

export default Sidebar