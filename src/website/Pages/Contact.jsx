import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { toast } from 'react-toastify';
import axios from 'axios';

function Contact() {

  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    mobile: "",
    comment: ""
    });

  const getform = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const validation = () => {
    var result = true;
    if (formvalue.name === "") {
      toast.error("Name is required");
      result = false;
      return false;
    }
    if (formvalue.email === "") {
      toast.error("Email is required");
      result = false;
      return false;
    }
    if (formvalue.mobile === "") {
      toast.error("Mobile is required");
      result = false;
      return false;
    }
    if (formvalue.comment === "") {
      toast.error("Comment is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    if (validation()){
    const res = await axios.post(`https://beaidal.com/create_contacts.php`, formvalue);
    //console.log(res);
    if (res.status == 200) {
      setFormvalue({ ...formvalue, name: "", email: "", mobile: "", comment: "" });
      toast.success(res.data.message);
      return false;
    }
  }
};
  return (
    <div>
      <Header />

      {/*/inner-page*/}
      <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title">
                  Contact Us </h2>
                <p className="inner-page-para mt-2">
                  Makeup is art</p>
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
      {/*//inner-page*/}
      {/* contact-form 2 */}
      <section className="w3l-contact-2 py-5" id="contact">
        <div className="container py-lg-4 py-md-3 py-2">
          <div className="title-content text-center">
            <h6 className="title-subw3hny mb-1">Get in touch</h6>
            <h3 className="title-w3l mb-5">Contact with our support <br />
              during emergency!</h3>
          </div>
          <div className="contact-grids d-grid mt-5 pt-lg-3">
            <div className="contact-left">
              <div className="cont-details">
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cont-right">
                    <h6>Our Office address:</h6>
                    <p>Bareja , Ahemdabad , Gujarat</p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fas fa-phone-alt" />
                  </div>
                  <div className="cont-right">
                    <h6>Call for help :</h6>
                    <p><a href="tel:+1(21) 234 4567">+91 9874563214</a></p>
                    <p><a href="tel:+1(21) 234 4567">+91 9632587415</a></p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="far fa-envelope" />
                  </div>
                  <div className="cont-right">
                    <h6>
                      Mail us:</h6>
                    <p><a href="mailto:support@mail.com" className="mail">supportglambelle@mail.com</a></p>
                    <p><a href="mailto:contact@mail.com" className="mail">contactglambelle@mail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
                  <form role="form" action="" method='post' onSubmit={submithandel}>
                    <div className="form-group">
                      <label> Name</label>
                      <input className="form-control" type="text" name='name' value={formvalue.name} onChange={getform} />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input className="form-control" type="email" name='email' value={formvalue.email} onChange={getform}/>
                    </div>
                    <div className="form-group">
                      <label>Number</label>
                      <input className="form-control" type="number" name='mobile' value={formvalue.mobile} onChange={getform} />
                    </div>
                    <div className="form-group">
                      <label>Comment</label>
                      <input className="form-control" type="text" name='comment' value={formvalue.comment} onChange={getform} />
                    </div>

                    <button type="submit" className="btn btn-info">Submit </button>
                  </form>
                </div>
          </div>
          <div className="map-iframe mt-5 pt-lg-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl" width="100%" height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen />
          </div>
        </div>
      </section>
      {/* /contact-form-2 -*/}


      <Footer />
    </div>
  )
}

export default Contact