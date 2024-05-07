import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Header />
            <section class="w3l-main-slider banner-slider position-relative" id="home">
                <div class="owl-one owl-carousel owl-theme">
                    <div class="item">
                        <div class="slider-info banner-view banner-top1">
                            <div class="container">
                                <div class="banner-info header-hero-19">
                                    <h5>Your beauty is priceless</h5>
                                    <h3 class="title-hero-19">Experience the Best Beauty Services</h3>
                                </div>
                                <div class="banner-info header-hero-19 banner-info2 header-hero-192">
                                    <h5>Too glam to give a damn</h5>
                                    <h3 class="title-hero-19">Professional Makeup  </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="scroll-button">
                    <Link to="/about" class="scroll">
                        <div class="arrow"></div>
                    </Link>
                </div>
            </section>


            <div>
                {/*/bottom-3-grids*/}
                <div className="w3l-3-grids py-5" id="grids-3">
                    <div className="container py-md-5 py-2">
                        <div className="title-content text-center">
                            <h6 className="title-subw3hny mb-1">About Us</h6>
                            <h3 className="title-w3l">Popular Services</h3>
                            <p className="text-para mb-4">Lorem ipsum dolor sit amet, elit. Id ab commodi magnam. </p>
                        </div>
                        {/*/row-1*/}
                        <div className="row pt-lg-4 mt-5 top-grids3-info">
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4">
                                <div className="grids3-info position-relative">
                                    <a href="#" className="d-block zoom"><img src="website/assets/images/b3.jpg" alt className="img-fluid news-image" /></a>
                                    <div className="w3-grids3-info">
                                    </div>
                                </div>
                                <h4 className="text-center mt-4"><a href="#">Professional Team</a>
                                </h4>
                                <p className="text-center mb-3">
                                <ul>
                                    <li>Before-and-After Transformations</li>
                                    <li>Tutorials and How-To Guides</li>
                                    <li>Product Reviews</li>
                                    <li>Behind-the-Scenes</li>
                                    <li>Client Testimonials</li>
                                    <li></li>
                                </ul>
                                </p>
                                <a className="w3item-link" href="#">
                                    <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-4 grids3-info2">
                                <div className="grids3-info second position-relative">
                                    <a href="blog-single.html" className="d-block zoom"><img src="website/assets/images/b2.jpg" alt className="img-fluid news-image" /></a>
                                    <div className="w3-grids3-info second">
                                    </div>
                                </div>
                                <h4 className="gdnhy-1 mt-4"><a href="#">Premium Products</a>
                                </h4>
                                <p className="text-center mb-3">
                                    <ul>
                                        <li>Professional Makeup Brushes</li>
                                        <li>Silk Blur Moisturizing Primer</li>
                                        <li>Eyeshadow Palettes</li>
                                        <li>Liquid Blush</li>
                                        <li>Plush Matte Lipsticks</li>

                                    </ul>
                                </p>
                                <a className="w3item-link" href="#">
                                    <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                                <div className="grids3-info position-relative">
                                    <a href="blog-single.html" className="d-block zoom"><img src="website/assets/images/b6.jpg" alt className="img-fluid news-image" /></a>
                                    <div className="w3-grids3-info">
                                    </div>
                                </div>
                                <h4 className="gdnhy-1 mt-4"><a href="#">The Latest Equipment</a>
                                </h4>
                                <p className="text-center mb-3">
                                    <ul>
                                        <li>Moisturizer</li>
                                        <li>Foundation</li>
                                        <li>Makeup Brushes</li>
                                        <li>Makeup Sponges</li>
                                        <li>Primer</li>

                                    </ul>
                                </p>
                                <a className="w3item-link" href="#">
                                    <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*//bottom-3-grids*/}
                {/*/home-page-video-popup*/}
                <section className="w3l-video-sec py-5" id="video">
                    <div className="container py-md-5">
                        <div className="row">
                            <div className="col-lg-7 w3l-index5 py-5">
                                <div className="w3video-bghny py-5">
                                    <div className="history-info position-relative py-5 my-lg-5">
                                        <a href="#small-dialog1" className="popup-with-zoom-anim play-view text-center position-absolute">
                                            <span className="video-play-icon">
                                                <span className="fa fa-play" />
                                            </span>
                                        </a>
                                        {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 w3l-video-info-right ps-lg-5 mt-lg-0 mt-5">
                                <div className="title-content-two">
                                    <h6 className="title-subw3hny">Popular Services</h6>
                                    <h3 className="title-w3l">Memorable Beauty Experience</h3>
                                    <p className="mt-2">
                                    <ul>
                                        <li>Educational Content</li>
                                        <li>Experiential Marketing</li>
                                        <li>Social Media Campaigns</li>
                                        <li>Authentic Advertising</li>
                                        <li>Personalized Experiences</li>
                                    </ul></p>
                                    <Link to="/services" className="btn btn-style btn-primary mt-lg-5 mt-4">Our Services </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //home-page-video-popup*/}
                {/*/Gallery-Section*/}
                <section className="w3l-gallery" id="gallery">
                    <div className="destionation-innf py-5">
                        <div className="container py-lg-5 py-md-4 py-2 HomePageGallery">
                            <div className="title-content text-center">
                                <h6 className="title-subw3hny text-center">Gallery</h6>
                                <h3 className="title-w3l mb-5 text-center">Photo Gallery</h3>
                            </div>
                            {/*/grids-grids*/}
                            <ul className="gallery_agile">
                                <li>
                                    <div className="w3_agile_portfolio_grid">
                                        <a href="#">
                                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*o41EFv5DkdOYSQ5m2zxlwg.png" alt=" " className="img-fluid radius-image" />
                                            <div className="portfolio-info">
                                                <h4>Gallery 1</h4>
                                                <i className="fas fa-plus details-link" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w3_agile_portfolio_grid mt-4">
                                        <a href="#">
                                            <img src="https://static.toiimg.com/thumb/msid-91875265,width-400,resizemode-4/91875265.jpg" alt=" " className="img-fluid radius-image" />
                                            <div className="portfolio-info">
                                                <h4>Gallery 2</h4>
                                                <i className="fas fa-plus details-link" />
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="w3_agile_portfolio_grid">
                                        <a href="#">
                                            <img src="https://images.squarespace-cdn.com/content/v1/52ed3507e4b041396187d22b/1668590730347-Q9TGOY0S9TEBGIYO4R8X/Disha+Buxani+Makeup+Artist+Bangalore++-1.jpg" alt=" " className="img-fluid radius-image" />
                                            <div className="portfolio-info">
                                                <h4>Gallery 3</h4>
                                                <i className="fas fa-plus details-link" />
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="w3_agile_portfolio_grid">
                                        <a href="#">
                                            <img src="https://cdn0.weddingwire.in/vendor/0299/3_2/640/jpeg/img-3731_15_50299-170620165046354.jpeg" alt=" " className="img-fluid radius-image" />
                                            <div className="portfolio-info">
                                                <h4>Gallery 4</h4>
                                                <i className="fas fa-plus details-link" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w3_agile_portfolio_grid mt-4">
                                        <a href="#">
                                            <img src="https://www.isaacluxe.co/wp-content/uploads/2021/12/Bridal-Makeup-Artist-in-South-Delhi.jpg" alt=" " className="img-fluid radius-image" />
                                            <div className="portfolio-info">
                                                <h4>Gallery 5</h4>
                                                <i className="fas fa-plus details-link" />
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            {/*//grids-grids*/}
                        </div>
                    </div>
                </section>
                {/*//Gallery-Section*/}
                {/*//testimonials*/}
                <section className="w3l-clients-1" id="testimonials">
                    {/*/cusrtomer-layout*/}
                    <div className="cusrtomer-layout py-5 pt-0">
                        <div className="container py-lg-5 py-md-4 py-2 pt-0">
                            {/*/testimonial-grids*/}
                            <div className="testimonial-row">
                                <div id="owl-demo1" className="owl-testimonial owl-carousel owl-theme col-lg-4">
                                    <div className="item">
                                        <div className="testimonial-content">
                                            <div className="testimonial">
                                                <div className="testi-des">
                                                    <i className="fas fa-quote-left" />
                                                    <div className="peopl align-self">
                                                        <h3>Dennis wilson</h3>
                                                    </div>
                                                </div>
                                                <blockquote>
                                                Whenever I took service from The GLAMBELLE , the experience is always wonderful. They never fail to satisfy the customer. Must visit Salon.
                                                 </blockquote>
                                                <ul className="social-media-test m-0 mt-4 p-0">
                                                    <li><a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a></li>
                                                    <li><a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                                    </li>
                                                    <li><a href="#instagram" className="instagram"><span className="fab fa-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="owl-demo1" className="owl-testimonial owl-carousel owl-theme col-lg-4">
                                    <div className="item">
                                        <div className="testimonial-content">
                                            <div className="testimonial">
                                                <div className="testi-des">
                                                    <i className="fas fa-quote-left" />
                                                    <div className="peopl align-self">
                                                        <h3>Dhwani shehjani</h3>
                                                    </div>
                                                </div>
                                                <blockquote>
                                                Absolutely amazing service and professional with their work. Must visit if you are seeking for your engagement or marraige look out.
                                                 </blockquote>
                                                <ul className="social-media-test m-0 mt-4 p-0">
                                                    <li><a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a></li>
                                                    <li><a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                                    </li>
                                                    <li><a href="#instagram" className="instagram"><span className="fab fa-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="owl-demo1" className="owl-testimonial owl-carousel owl-theme col-lg-4">
                                    <div className="item">
                                        <div className="testimonial-content">
                                            <div className="testimonial">
                                                <div className="testi-des">
                                                    <i className="fas fa-quote-left" />
                                                    <div className="peopl align-self">
                                                        <h3>Meena Patel</h3>
                                                    </div>
                                                </div>
                                                <blockquote>
                                                Very experienced staff, service is number one. The results are excellent. I don't know what I say about salon. Really, I like most.
                                                 </blockquote>
                                                <ul className="social-media-test m-0 mt-4 p-0">
                                                    <li><a href="#facebook" className="facebook"><span className="fab fa-facebook-f" /></a></li>
                                                    <li><a href="#twitter" className="twitter"><span className="fab fa-twitter" /></a>
                                                    </li>
                                                    <li><a href="#instagram" className="instagram"><span className="fab fa-instagram" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*//testimonial-grids*/}
                        </div>
                    </div>
                    {/*//cusrtomer-layout*/}
                </section>
                {/* //testimonials */}
                {/*/home-page-mid*/}
                <section className="w3-midhny-sec py-5" id="mid">
                    <div className="container py-lg-5">
                        <div className="w3-midhny-info">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="bottom-info">
                                        <div className="header-section title-content-two pe-lg-5">
                                            <h5 className="title-subw3hny mb-3">Our Special Offer</h5>
                                            <h3 className="title-w3l two mb-4">The Wedding <br />Bell !!
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 align-self mt-lg-0 mt-sm-5 mt-4">
                                    <div className="w3l-buttons d-sm-flex justify-content-end">
                                        <a href="#book" className="btn btn-style btn-white btn-primary">
                                            Make an appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*//home-page-mid*/}
                {/*/w3l-subscribe*/}
                <section className="w3l-subscribe-content py-5">
                    <div className="container py-md-4 py-3 text-center">
                        <div className="row">
                            <div className="col-lg-9 col-md-10 mx-auto">
                                <div className="subscribe mx-auto">
                                    <div className="header-section text-center mx-auto">
                                        <h6 className="title-subw3hny mb-2">Join Us</h6>
                                        <h3 className="title-w3l">Stay Update!</h3>
                                        <p className="my-3 px-lg-5">We appreciate your trust greatly! Our clients choose us and our products because they know we’re the best.</p>
                                    </div>
                                    <form action="#" method="post" className="subscribe-wthree pt-2 mt-5">
                                        <div className="flex-wrap subscribe-wthree-field">
                                            <input className="form-control" type="email" placeholder="Email" name="email" required />
                                            <button className="btn btn-style btn-primary" type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*//w3l-subscribe*/}
            </div>

            <Footer />
        </>
    )
}

export default Home