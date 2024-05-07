import React from 'react'
import Menubar from '../Components/Menubar'
import Footer from '../Components/Footer'

function Dashboard() {
  return (
    <div>
      <Menubar />
      {/* <!--  page-wrapper --> */}
      <div id="page-wrapper" style={{ marginTop: "100px" }}>
        <div className="row">
          {/* Page Header */}
          <div className="col-lg-12">
            <h1 className="page-header">Dashboard</h1>
          </div>
          {/*End Page Header */}
        </div>
        <div className="row">
          {/* Welcome */}
          <div className="col-lg-12">
            <div className="alert alert-info">
              <i className="fa fa-folder-open" /><b>&nbsp;Hello ! </b>Welcome Back <b>Shrusti Patel </b>
              <i className="fa  fa-pencil" /><b>&nbsp;2,000 </b>Support Tickets Pending to Answere. nbsp;
            </div>
          </div>
          {/*end  Welcome */}
        </div>
        <div className="row">
          {/*quick info section */}
          <div className="col-lg-3">
            <div className="alert alert-danger text-center">
              <i className="fa fa-calendar fa-3x" />&nbsp;<b>20 </b>Meetings Sheduled This Month
            </div>
          </div>
          <div className="col-lg-3">
            <div className="alert alert-success text-center">
              <i className="fa  fa-beer fa-3x" />&nbsp;<b>27 % </b>Profit Recorded in This Month
            </div>
          </div>
          <div className="col-lg-3">
            <div className="alert alert-info text-center">
              <i className="fa fa-rss fa-3x" />&nbsp;<b>1,900</b> New Subscribers This Year
            </div>
          </div>
          <div className="col-lg-3">
            <div className="alert alert-warning text-center">
              <i className="fa  fa-pencil fa-3x" />&nbsp;<b>2,000 $ </b>Payment Dues For Rejected Items
            </div>
          </div>
          {/*end quick info section */}
        </div>
        <div className="row mt-5">
          {/*quick info section */}
          <div className="col-lg-5">
            <div className="panel-body yellow">
              <i className="fa fa-bar-chart-o fa-3x" />
              <h3>20,741 </h3>
            </div>
            <div className="panel-footer">
              <span className="panel-eyecandy-title">Daily User Visits
              </span>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="panel-body blue">
              <i className="fa fa-pencil-square-o fa-3x" />
              <h3>2,060 </h3>
            </div>
            <div className="panel-footer">
              <span className="panel-eyecandy-title">Pending Orders Found
              </span>
            </div>
          </div>
          <div className="col-lg-5 mt-4">
            <div className="panel-body green">
              <i className="fa fa fa-floppy-o fa-3x" />
              <h3>20 GB</h3>
            </div>
            <div className="panel-footer">
              <span className="panel-eyecandy-title">New Data Uploaded
              </span>
            </div>
          </div>
          <div className="col-lg-5 mt-4">
            <div className="panel-body red">
              <i className="fa fa-thumbs-up fa-3x" />
              <h3>2,700 </h3>
            </div>
            <div className="panel-footer">
              <span className="panel-eyecandy-title">New User Registered
              </span>
            </div>
          </div>
          {/*end quick info section */}
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            {/* Notifications*/}
            <div className="panel panel-primary">
              <div className="panel-heading">
                <i className="fa fa-bell fa-fw" />Notifications Panel
              </div>
              <div className="panel-body">
                <div className="list-group">
                  <a href="#" className="list-group-item">
                    <i className="fa fa-comment fa-fw" />New Comment
                    <span className="pull-right text-muted small"><em>4 minutes ago</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-twitter fa-fw" />3 New Followers
                    <span className="pull-right text-muted small"><em>12 minutes ago</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-envelope fa-fw" />Message Sent
                    <span className="pull-right text-muted small"><em>27 minutes ago</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-tasks fa-fw" />New Task
                    <span className="pull-right text-muted small"><em>43 minutes ago</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-upload fa-fw" />Server Rebooted
                    <span className="pull-right text-muted small"><em>11:32 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-bolt fa-fw" />Server Crashed!
                    <span className="pull-right text-muted small"><em>11:13 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-warning fa-fw" />Server Not Responding
                    <span className="pull-right text-muted small"><em>10:57 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-shopping-cart fa-fw" />New Order Placed
                    <span className="pull-right text-muted small"><em>9:49 AM</em>
                    </span>
                  </a>
                </div>
                {/* /.list-group */}
                <a href="#" className="btn btn-default btn-block">View All Alerts</a>
              </div>
            </div>
            {/*End Notifications*/}
          </div>

          <div className="col-lg-4">
            {/* Chat Panel Example*/}
            <div className="chat-panel panel panel-primary">
              <div className="panel-heading">
                <i className="fa fa-comments fa-fw" />
                Chat
                <div className="btn-group pull-right">
                  <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-chevron-down" />
                  </button>
                  <ul className="dropdown-menu slidedown">
                    <li>
                      <a href="#">
                        <i className="fa fa-refresh fa-fw" />Refresh
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-check-circle fa-fw" />Available
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-times fa-fw" />Busy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-clock-o fa-fw" />Away
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <i className="fa fa-sign-out fa-fw" />Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-body">
                <ul className="chat">
                  <li className="left clearfix">
                    <span className="chat-img pull-left">
                      <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                    </span>
                    <div className="chat-body clearfix">
                      <div className="header">
                        <strong className="primary-font">Jack Sparrow</strong>
                        <small className="pull-right text-muted">
                          <i className="fa fa-clock-o fa-fw" />12 mins ago
                        </small>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                      </p>
                    </div>
                  </li>
                  <li className="right clearfix">
                    <span className="chat-img pull-right">
                      <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" className="img-circle" />
                    </span>
                    <div className="chat-body clearfix">
                      <div className="header">
                        <small className=" text-muted">
                          <i className="fa fa-clock-o fa-fw" />13 mins ago</small>
                        <strong className="pull-right primary-font">Bhaumik Patel</strong>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                      </p>
                    </div>
                  </li>
                  <li className="left clearfix">
                    <span className="chat-img pull-left">
                      <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                    </span>
                    <div className="chat-body clearfix">
                      <div className="header">
                        <strong className="primary-font">Jack Sparrow</strong>
                        <small className="pull-right text-muted">
                          <i className="fa fa-clock-o fa-fw" />14 mins ago</small>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                      </p>
                    </div>
                  </li>
                  <li className="right clearfix">
                    <span className="chat-img pull-right">
                      <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" className="img-circle" />
                    </span>
                    <div className="chat-body clearfix">
                      <div className="header">
                        <small className=" text-muted">
                          <i className="fa fa-clock-o fa-fw" />15 mins ago</small>
                        <strong className="pull-right primary-font">Bhaumik Patel</strong>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="panel-footer">
                <div className="input-group">
                  <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                  <span className="input-group-btn">
                    <button className="btn btn-warning btn-sm" id="btn-chat">
                      Send
                    </button>
                  </span>
                </div>
              </div>
            </div>
            {/*End Chat Panel Example*/}
          </div>
        </div>
      </div>

      {/* <!-- end page-wrapper --> */}
      <Footer />
    </div>
  )
}

export default Dashboard