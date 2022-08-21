import React, { useContext, useState, useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const LoginPage = () => {
    window.scrollTo(0, 0)
    let { registerUser,user } = useContext(AuthContext)
    let navigate = useNavigate()
    useEffect(()=>{
        if(user) return navigate(-1)
      },[])

    return (
        <div>
            <Header />
            <div className="content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-8 offset-md-2">

                            <div className="account-content">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-7 col-lg-6 login-left">
                                        <img src="/assets/img/login-banner.png" className="img-fluid" alt="Fresh Minds Register" />
                                    </div>
                                    <div className="col-md-12 col-lg-6 login-right">
                                        <div className="login-header">
                                            <h3>Patient Register</h3>
                                        </div>

                                        <form onSubmit={registerUser}>
                                            <div className="form-group form-focus">
                                                <input type="text" name='first_name' className="form-control floating" />
                                                <label className="focus-label">First Name</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="text" name='last_name' className="form-control floating" />
                                                <label className="focus-label">Last Name</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="text" name='username' className="form-control floating" />
                                                <label className="focus-label">Username</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="email" name='email' className="form-control floating" />
                                                <label className="focus-label">Email</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="password" name='password' className="form-control floating" />
                                                <label className="focus-label">Password</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="text" name='phone' className="form-control floating" />
                                                <label className="focus-label">Phone no</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="text" name='address' className="form-control floating" />
                                                <label className="focus-label">Address</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="date" name='dob' className="form-control floating" />
                                                <label className="focus-label">DOB</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="file" name="profilepic" accept="image/png, image/jpeg" className="form-control floating" />
                                                <label className="focus-label">Profile Picture</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <select name='gender' className="form-control floating" >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <label className="focus-label">Gender</label>
                                            </div>
                                            <div className="text-right">
                                                <Link to='/login' className="forgot-link" >Already have an account?</Link>
                                            </div>
                                            <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>


                                        </form>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )

}

export default LoginPage