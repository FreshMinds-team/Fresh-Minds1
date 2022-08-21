import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

const Header = () => {
  const url = "https://rshishir.pythonanywhere.com/media/"
  let { logoutUser, user } = useContext(AuthContext)
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src="assets/img/logo.png" alt="Logo" />
        </Link>
        <Link to="/" className="logo logo-small">
          <img src="assets/img/logo-small.png" alt="Logo" width="30" height="30" />
        </Link>
      </div>

      <a href="javascript:void(0);" id="toggle_btn">
        <i className="fe fe-text-align-left"></i>
      </a>


      <a className="mobile_btn" id="mobile_btn">
        <i className="fa fa-bars"></i>
      </a>

      <ul className="nav user-menu">
        <li className="nav-item dropdown has-arrow">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <span className="user-img"><img className="rounded-circle" src={url+user.profilepic} width="31" /></span>
          </a>
          <div className="dropdown-menu">
            <div className="user-header">
              <div className="avatar avatar-sm">
                <img src={url+user.profilepic} alt="User Image" className="avatar-img rounded-circle" />
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

      </ul>

    </div>
  )
}

export default Header