import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Header1 from '../Components/Header1'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
  const [formvalue, setFormvalue] = useState({
    email: "",
    pass: "",
    });

  const getform = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const validation = () => {
    var result = true;
    if (formvalue.email === "") {
      toast.error("Email is required");
      result = false;
      return false;
    }
    if (formvalue.pass === "") {
      toast.error("password is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    if (validation()){
    const res = await axios.post(`https://beaidal.com/create_artist.php`, formvalue);
    //console.log(res);
    if (res.status == 200) {
      setFormvalue({ ...formvalue,  email: "", pass: "" });
      toast.success(res.data.message);
      return false;
    }
  }
};
  return (

    <div>
      <div className="container-xxl bg-white p-0">
        <Header1 title={"Login"} />
        {/* Contact Start */}
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center"><span />Login Us<span /></p>
              <h1 className="text-center mb-5">Login For Services</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="wow fadeInUp" data-wow-delay="0.3s">
                <form role="form"  method='post' onSubmit={submithandel}>
                    <div className="form-group">
                      <label>Artist Email</label>
                      <input className="form-control" name="email" value={formvalue.email} onChange={getform}  type="email" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" name='pass' value={formvalue.pass} onChange={getform}  type="password" />
                    </div>
                    <button type="submit" className="btn btn-info">Submit </button>
                    <Link to="/singup">If you not Registered then Register Here</Link>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
        <Footer />
      </div>
    </div>
  )
}

export default Login