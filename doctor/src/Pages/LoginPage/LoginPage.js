import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

const LoginPage = () => {
  let { user, loginUser } = useContext(AuthContext)
  let navigate = useNavigate()
  
  useEffect(()=>{
    if(user) return navigate(-1)
  },[])
  return (
    <div className='main-wrapper login-body'>
        <div className="login-wrapper">
            	<div className="container">
                	<div className="loginbox">
                    	<div className="login-left">
							<img className="img-fluid" src="assets/img/logo-white.png" alt="Logo" />
                        </div>
                        <div className="login-right">
							<div className="login-right-wrap">
								<h1>Login</h1>
								<p className="account-subtitle">Access to our dashboard</p>
								
								<form onSubmit={loginUser}>
									<div className="form-group">
										<input className="form-control" name='email' type="text" placeholder="Email" />
									</div>
									<div className="form-group">
										<input className="form-control" name='password' type="password" placeholder="Password" />
									</div>
									<div className="form-group">
										<button className="btn btn-primary btn-block" type="submit">Login</button>
									</div>
								</form>
								
							</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default LoginPage