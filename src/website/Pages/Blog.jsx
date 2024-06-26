import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import { Link, useParams } from 'react-router-dom'
import Header from '../Components/Header'

function Blog() {
  const { bid } = useParams()
  const [data, setdata] = useState([])
  const fetchData = async () => {
    try {
      const res = await axios.get(`https://beaidal.com/view_blog.php`);
      if (res.status === 200) {
        const blog = res.data.filter(item => item.id == bid)
        setdata(res.data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Header />
      <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title">
                  Our Popular Blog </h2>
                <p className="inner-page-para mt-2">
                  Simply stunning</p>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li><Link to="/">Home</Link></li>
                  <li className="active"><span className="fas fa-angle-double-right mx-2" /> Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      
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
                <h6 className="title-subw3hny">Popular Tutorial</h6>
                <h3 className="title-w3l">How to Achieve the Perfect Makeup</h3>
                <p className="mt-2">Lorem ipsum dolor sit amet elit. Velit beatae rem ullam dolore nisi esse quasi, sit
                  amet.Lorem ipsum dolor sit amet elit. Velit beatae rem ullam dolore nisi esse quasi,Lorem ipsum dolor sit amet.</p>
                <a href="services.html" className="btn btn-style btn-primary mt-lg-5 mt-4">See All Blog </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-contact-2 py-5" id="contact">
          <div className="container py-lg-4 py-md-3 py-2">
            <div className="title-content text-center">
              <h6 className="title-subw3hny mb-1">Blog</h6>
              <h3 className="title-w3l mb-5">Read Blog About<br />
                Beauty care!</h3>
            </div>
            <div className="artist-grids d-grid mt-5 pt-lg-3">
              {data && data.map((value) => (
                <div className='artist-card' key={value.id}>
                  <div className='artist_img'>
                    <img src={value.image} alt="artist img" />
                  </div>
                  <div className='artist_content'>
                    <h4 className='artist_name  my-2'>{value.title}</h4>
                    <div className='d-flex justify-content-between align-items-center'>
                     <p>{value.description}</p>
                    </div>
                    <Link to={`/single_blog/${value.id}`} className='btn btn-primary my-2'>Read Blog</Link>
                  </div>
                </div>))}
            </div>
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default Blog