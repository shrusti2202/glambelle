import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

function About() {
  return (
    <>
      <Header />

      <div class="inner-banner py-5">
        <section class="w3l-breadcrumb text-left py-sm-5 ">
          <div class="container">
            <div class="w3breadcrumb-gids">
              <div class="w3breadcrumb-left text-left">
                <h2 class="inner-w3-title">
                  About Us </h2>
                <p class="inner-page-para mt-2">
                  Makeup Artist , Educator & Entrepreneur</p>
              </div>
              <div class="w3breadcrumb-right">
                <ul class="breadcrumbs-custom-path">
                  <li><Link to="/">Home</Link></li>
                  <li class="active"><span class="fas fa-angle-double-right mx-2"></span> About Us</li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>
      <div>
        <div className="w3l-3-grids py-5" id="grids-3">
          <div className="container py-md-5 py-2">
            <div className="abin-top-content text-center mb-md-5 mb-4">
              <h6 className="title-subw3hny">About Us</h6>
              <h3 className="title-w3l mb-3">Our Story</h3>
              <p className="abinfo-para">Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia cum ex ipsam autem!earum sequi amet.Earum mollitia cum ex ipsam autem!earum sequi amet.</p>
            </div>
            <div className="aboyt-ininf">
              <div className="about-img ">
                <img src="https://images.unsplash.com/photo-1684868265715-03e19a3e0e00?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt className="img-fluid radius-image" style={{ width: "100%" }} />
              </div>
              <div className="three-grids-hmew3">
                <div className="three-grid-1 text-left mt-5">
                  <h4>Who We Are ?</h4>
                  <p className="mt-2 pr-lg-4">We invite you to embark on a journey of self-care and transformation at The Empire Salon. Step into our realm of beauty and let our skilled professionals work their magic, leaving you looking and feeling your absolute best. Schedule an appointment today and experience the pinnacle of beauty and relaxation in a haven of style and sophistication. Your satisfaction is our top priority, and we look forward to welcoming you to GlamBelle.
                  </p>
                </div>
                <div className="three-grid-1 text-left mt-5">
                  <h4>What We Do ?</h4>
                  <p className="mt-2 pr-lg-4">Our vision at The GlamBelle is to be the leading destination for beauty, grooming, and self-care, renowned for our exceptional services, innovative techniques, and transformative experiences. We strive to empower individuals to embrace their unique beauty, radiate confidence, and feel empowered in their own skin.
                  </p>
                </div>
                <div className="three-grid-1 text-left mt-5">
                  <h4>Why Choose Us</h4>
                  <p className="mt-2 pr-lg-4">Our mission is to create a haven of style and sophistication, where artistry, passion, and personalized care converge to exceed the expectations of our clients. We are dedicated to providing top-notch services, utilizing the latest trends, premium products, and advanced techniques to deliver exceptional results. With a focus on continuous education and staying at the forefront of the industry, we aim to inspire, uplift, and enhance the lives of our clients, one beauty experience at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*//bottom-3-grids*/}
        {/*/features-section */}
        <section className="w3l-features py-5" id="work">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-content text-center mb-md-5 mb-4">
              <h6 className="title-subw3hny mb-1">Why Us</h6>
              <h3 className="title-w3l mb-5">What We Offer</h3>
            </div>
            <div className="main-cont-wthree-2 align-items-center text-center pt-lg-4">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                  <div className="grids-1 box-wrap">
                    <div className="icon">
                      <i className="fas fa-biking" />
                    </div>
                    <h4><Link to="/service" className="title-head mb-3">
                      Hair Services</Link></h4>
                    <p className="text-para mb-3">From precision cuts to stunning colors, our hair services will leave you feeling confident and ready to conquer the world. </p>
                    <Link className="w3item-link" to="/services">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                  <div className="grids-1 box-wrap">
                    <div className="icon">
                      <i className="fas fa-theater-masks" />
                    </div>
                    <h4><Link to="/service" className="title-head mb-3">
                      Facial Treatments</Link></h4>
                    <p className="text-para mb-3">Reveal your skin's natural radiance with our skin services, personalized to address your specific needs and restore a youthful glow. </p>
                    <Link className="w3item-link" to="/services">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                  <div className="grids-1 box-wrap">
                    <div className="icon">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <h4><Link to="/service" className="title-head mb-3">
                      GlamBelle Products</Link></h4>
                    <p className="text-para mb-3">Certainly! As a makeup artist, having a well-stocked kit is essential to create stunning looks for your clients. </p>
                    <Link className="w3item-link" to="/services">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//features section */}
                               {/*/team*/}
                               <section id="team" className="w3lteam py-5">
                    <div className="container py-md-5">
                        <div className="title-content text-center">
                            <h6 className="title-subw3hny mb-1">Our Team</h6>
                            <h3 className="title-w3l mb-5">Our Creative Team.</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQicESJ5Tbd6-Pm1ed9cgMg7zUMtQEOQZ9SpqaEBygq1c7grohG" className="img-fluid radius-image" alt /></div>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Lisa Eldridge</h4>
                                            <span>New Zealand</span>
                                        </div>
                                        <div className="social">
                                            <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
                                            <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                            <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTfuNvrhyr4w5Q1Pi2su2jb6jjrBG0Zcx79t8eHhzyA6savNs7mxF_DFZMSIu6VCB_q" className="img-fluid radius-image" alt /></div>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Gucci Westman</h4>
                                            <span>American</span>
                                        </div>
                                        <div className="social">
                                            <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
                                            <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                            <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="https://assets.vogue.in/photos/5ce43ea29cc0c02417f9ee0d/1:1/w_1080,h_1080,c_limit/namrata-soni-sonam-kapoor-expert-tips.jpg" className="img-fluid radius-image" alt /></div>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Namrata Soni</h4>
                                            <span>Pedicurist</span>
                                        </div>
                                        <div className="social">
                                            <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
                                            <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                            <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic"><img src="http://t3.gstatic.com/images?q=tbn:ANd9GcQ1JbuMegOh5NtYbbOjWjm3VnE-2ZnBrl3w3mf1-KRX9q75E4tx" className="img-fluid radius-image" alt /></div>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Lekha Gupta</h4>
                                            <span>Cosmetologist</span>
                                        </div>
                                        <div className="social">
                                            <a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a>
                                            <a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                            <a href="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Team Section */}
 {/*/w3l-project*/}
 <section id="counts" className="w3lcounts">
                    <div className="container py-md-3">
                        <div className="w3l-project-in">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-users" />
                                        <div className="count-box-right">
                                            <p className="counter">960</p>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-md-0 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-user-shield" />
                                        <div className="count-box-right">
                                            <p className="counter">1560</p>
                                            <p>Our Staff</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-headset" />
                                        <div className="count-box-right">
                                            <p className="counter">1660</p>
                                            <p>Hours Of Support</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
                                    <div className="count-box">
                                        <i className="fas fa-trophy" />
                                        <div className="count-box-right">
                                            <p className="counter">2860</p>
                                            <p>Awards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        {/*//w3l-project*/}
        {/*/w3l-midslider*/}
        <section className="w3l-midslider py-5" id="midslider">
          {/* /grids */}
          <div className="container py-md-5">
            <div className="row">
              <div className="col-lg-5 title-content-two text-left pe-lg-5 mb-lg-0 mb-5">
                <h6 className="title-subw3hny mb-1">What We Offer</h6>
                <h3 className="title-w3l mb-3">
                  We Provide A New Fashions Tips In One Place</h3>
                <ul className="icon-list-items mt-3">
                  <li className="icon-list-item">
                    <i aria-hidden="true" className="fas fa-circle" />
                    Makeup
                  </li>
                  <li className="icon-list-item mt-2">
                    <i aria-hidden="true" className="fas fa-circle" />
                    Hair Styling
                  </li>
                  <li className="icon-list-item mt-2">
                    <i aria-hidden="true" className="fas fa-circle" />
                    Skincare consultations.
                  </li>
                </ul>
              </div>
              {/* /grids */}
              <div className="col-lg-7 stats_info-images ps-lg-5">
                <div className="stats_info-images-right row">
                  <div className="col-6 mid-slider-content">
                  <img src="https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid radius-image" alt />

                  </div>
                  <div className="col-6 mid-slider-content">
                  <img src="https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid radius-image" alt />

                  </div>
                </div>
              </div>
            </div>
            {/* /grids */}
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default About