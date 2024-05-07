import React, { useState } from 'react'
import Menubar from '../Components/Menubar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';

function Admin_signup() {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    pass: "",
    shop_title: "",
    mobile: "",
    area: "",
    full_address: "",
    map_url: "",
    about: "",
    services: "",
    profile_img: "",
    work_img: "",
    product_used: "",
    price: "",
    travel_to_vanue: "",
    airbrush: "",
    since_work: "",
    timming: ""
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
    if (formvalue.pass === "") {
      toast.error("password is required");
      result = false;
      return false;
    }
    if (formvalue.mobile === "") {
      toast.error("mobile is required");
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
      setFormvalue({ ...formvalue, name: "", email: "", pass: "",  shop_title: "", mobile: "", area: "",  full_address: "",  map_url: "",  about: "",  services: "",  profile_img: "",  work_img: "",  product_used: "",  price: "",  travel_to_vanue: "",  airbrush: "",  status: "",  since_work: "",  timming: "" });
      toast.success(res.data.message);
      return false;
    }
  }
};
  return (
    <div>
      <Menubar />

      <body class="body-Login-back">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4" style={{ marginTop: "100px" }}>
              <h1 style={{ textAlign: 'center' }}>Sign With Us</h1>
              <div className="login-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Please SingUp</h3>
                </div>
                <div className="panel-body">
                <form role="form"  method='post' onSubmit={submithandel}>
                    <div className="form-group">
                      <label>Artist Name</label>
                      <input className="form-control" name='name' value={formvalue.name} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Email</label>
                      <input className="form-control" name="email" value={formvalue.email} onChange={getform}  type="email" />
                    </div>
                    <div className="form-group">
                      <label>Artist Number</label>
                      <input className="form-control" name='mobile' value={formvalue.mobile} onChange={getform}  type="number" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" name='pass' value={formvalue.pass} onChange={getform}  type="password" />
                    </div>
                    <div className="form-group1">
                      <label>Shop Name</label>
                      <input className="form-control" name='shop_title' value={formvalue.shop_title} onChange={getform}  type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist Area</label>
                      <input className="form-control" name='area' value={formvalue.area} onChange={getform}  type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist Full Adsress</label>
                      <input className="form-control" name='full_address' value={formvalue.full_address} onChange={getform}  type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist Location</label>
                      <input className="form-control" name='map_url' value={formvalue.map_url} onChange={getform}  type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist About</label>
                      <input className="form-control" name='about' value={formvalue.about} onChange={getform}  type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist Services</label>
                      <input className="form-control" name='services' value={formvalue.services} onChange={getform}  type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Image</label>
                      <input className="form-control" name='profile_img' value={formvalue.profile_img} onChange={getform}  type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist Work Image</label>
                      <input className="form-control" name='work_img' value={formvalue.work_img} onChange={getform}  type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist Product used</label>
                      <input className="form-control" name='product_used' value={formvalue.product_used} onChange={getform}  type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist Price</label>
                      <input className="form-control" name='price' value={formvalue.price} onChange={getform} type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist Travel</label>
                      <input className="form-control" name='travel_to_vanue' value={formvalue.travel_to_vanue} onChange={getform} type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist Airbrush</label>
                      <input className="form-control" name='airbrush' value={formvalue.airbrush} onChange={getform} type="text" />
                    </div>

                    <div className="form-group1">
                      <label>Artist Since Work</label>
                      <input className="form-control" name='since_work' value={formvalue.since_work} onChange={getform} type="text" />
                    </div>
                    <div className="form-group1">
                      <label>Artist Timming</label>
                      <input className="form-control" name='timming' value={formvalue.timming} onChange={getform} type="text" />
                    </div>
                    

                    <button type="submit" className="btn btn-info">Submit </button>
                    <Link to="/admin_login">If you Registered then Login Here</Link>

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

export default Admin_signup