import React from 'react'
import Footer from '../Components/Footer'
import Menubar from '../Components/Menubar'
import { Link } from 'react-router-dom'

function Admin_login() {
  return (
    <div>
      <Menubar />
      <body class="body-Login-back">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4 text-center logo-margin ">
              <h1>Login With Us</h1>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <div className="login-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Please LogIn</h3>
                </div>
                <div className="panel-body">
                  <form role="form">
                    <fieldset>
                      <div className="form-group">
                        <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="Password" name="password" type="password" />
                      </div>
                      {/* Change this to a button or input when using this as a form */}
                      <button className="btn btn-lg btn-success btn-block">Login</button>
                      <Link to="/admin_signup">If you not Registered then Register Here</Link>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  )
}

export default Admin_login