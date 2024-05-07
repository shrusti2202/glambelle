import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {

    return (
        <div>
            <footer className="w3l-footer-29-main">
                <div className="footer-29 py-5">
                    <div className="container">
                        <div className="row footer-top-29">
                            <div className="col-lg-3 col-md-6 footer-list-29 footer-1 pe-lg-5">
                                <div className="bottom-copies">
                                    <h2><Link className="navbar-brand" to="/">
                                        <i className="fas fa-spa" />GlamBelle
                                    </Link></h2>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-3">
                                <p className="copy-footer-29 text-center">© 2024 Spaw. All rights reserved | Designed by Shrusti Patel</p>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-list-29 mt-lg-0 mt-4">
                                <div className="main-social-footer-29">
                                    <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
                                    <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                    <a href="#instagram" className="instagram"><span className="fab fa-instagram" /></a>
                                    <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* move top */}
                <button onclick="topFunction()" id="movetop" title="Go to top">
                    <span className="fa fa-angle-up" />
                </button>
                {/* //move top */}
            </footer>

        </div>
    )
}

export default Footer