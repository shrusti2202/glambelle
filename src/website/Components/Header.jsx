import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

useEffect(() => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('mode');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    toggleSwitch.addEventListener('change', switchTheme, false);

}, [])
  return (
    <>
      <header id="site-header" className="bg-dark sticky-lg-top">
        <div className="container ">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <h1><Link className="navbar-brand pe-xl-5 pe-lg-4" to="/">
              <i className="fas fa-spa" />GlamBell
            </Link></h1>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/artist">Artist</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
           
            </div>
               {/*/search-right*/}
               <ul className="header-search me-lg-4">
                <li className="nav-item search-right">
                  <a href="#search" className="btn search-btn " title="search">Search <span className="fas fa-search ms-3" aria-hidden="true" /></a>
                  {/* search popup */}
                  <div id="search" className="pop-overlay">
                    <div className="popup">
                      <h3 className="title-w3l two mb-4 text-left">Search Here</h3>
                      <form action="#" method="GET" className="search-box d-flex position-relative">
                        <input type="search" placeholder="Enter Keyword here" style={{color:'white'}} name="search" required="required" autofocus />
                      </form>
                    </div>
                    <a className="close" href="#close">×</a>
                  </div>
                  {/* /search popup */}
                </li>
              </ul>
              {/*//search-right*/}
            {/* toggle switch for light and dark theme */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme */}
            \
          </nav>
        </div>
      </header>

    </>
  )
}

export default Header