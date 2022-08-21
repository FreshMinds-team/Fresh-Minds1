import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row justify-around">

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src="/assets/img/footerlogo.png" className='footer-logo' alt="logo" />
                  </div>
                </div>
              </div>

             <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span><i className="fas fa-map-marker-alt"></i></span>
                      <p>
                        Tokha- 06,<br />
                        Kathmandu, Nepal
                      </p>
                    </div>
                    <p>
                      <i className="fas fa-phone-alt"></i>
                      +977-01-4965277
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-envelope"></i>
                      freshminds@example.com
                    </p>
                    <br />
                    <ul className="policy-menu">
                      <li>
                        <a href="term-condition.html">Terms and Conditions</a>
                      </li>
                      <li><a href="privacy-policy.html">Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer