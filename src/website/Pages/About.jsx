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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-8-AjsdacihZZmt0AJQBR4GAibbypdYD-w&s" alt className="img-fluid radius-image" style={{ width: "100%" }} />
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
                  <div className="pic"><img src="data:image/jpeg;base64,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" className="img-fluid radius-image" alt /></div>
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Esthetician</span>
                    </div>
                    <div className="social">
                      <Link to="#facebook" className="facebook"><span className="fab fa-facebook-f" /></Link>
                      <Link to="#twitter" className="twitter"><span className="fab fa-twitter" /></Link>
                      <Link to="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic"><img src="assets/images/team2.jpg" className="img-fluid radius-image" alt /></div>
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Hair Dresser</span>
                    </div>
                    <div className="social">
                      <Link to="#facebook" className="facebook"><span className="fab fa-facebook-f" /></Link>
                      <Link to="#twitter" className="twitter"><span className="fab fa-twitter" /></Link>
                      <Link to="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic"><img src="assets/images/team3.jpg" className="img-fluid radius-image" alt /></div>
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>Pedicurist</span>
                    </div>
                    <div className="social">
                      <Link to="#facebook" className="facebook"><span className="fab fa-facebook-f" /></Link>
                      <Link to="#twitter" className="twitter"><span className="fab fa-twitter" /></Link>
                      <Link to="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic"><img src="assets/images/team4.jpg" className="img-fluid radius-image" alt /></div>
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Linda James</h4>
                      <span>Cosmetologist</span>
                    </div>
                    <div className="social">
                      <Link to="#facebook" className="facebook"><span className="fab fa-facebook-f" /></Link>
                      <Link to="#twitter" className="twitter"><span className="fab fa-twitter" /></Link>
                      <Link to="#linkd" className="linkd"><span className="fab fa-linkedin-in" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Team Section */}
        {/*/w3l-project*/}

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
                    <img src="data:image/jpeg;base64,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" className="img-fluid radius-image" alt />
                  </div>
                  <div className="col-6 mid-slider-content">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SwGlwr_xatpLyeKXotAFztR0GM-LdGmaGw&s' className="img-fluid radius-image" alt></img>
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