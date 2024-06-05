import React, { useState } from 'react'
import Menubar from '../Components/Menubar'
import Footer from '../Components/Footer'
import { toast } from 'react-toastify';
import axios from 'axios';



function Add_artist() {

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
    status: "",
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
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    if (validation()) {
      const res = await axios.post(`https://beaidal.com/create_artist.php`, formvalue);
      //console.log(res);
      if (res.status == 200) {
        setFormvalue({ ...formvalue, name: "", email: "", pass: "", shop_title: "", mobile: "", area: "", full_address: "", map_url: "", about: "", services: "", profile_img: "", work_img: "", product_used: "", price: "", travel_to_vanue: "", airbrush: "", status: "", since_work: "", timming: "" });
        toast.success(res.data.message);
        return false;
      }
    }
  };
  return (
    <div>
      <Menubar />
      <div className="content-wrapper container" style={{ marginTop: '100px' }}>
        <div className="container">
          <div className="row pad-botm">
            <div className="col-md-12">
              <h1 className="header-line">Add Artist</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-info">
                <div className="panel-heading">
                  Add Artist
                </div>
                <div className="panel-body">
                  <form role="form" method='post' onSubmit={submithandel}>
                    <div className="form-group">
                      <label>Artist Name</label>
                      <input className="form-control" name='name' value={formvalue.name} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Email</label>
                      <input className="form-control" name="email" value={formvalue.email} onChange={getform} type="email" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" name='pass' value={formvalue.pass} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Shop Name</label>
                      <input className="form-control" name='shop_title' value={formvalue.shop_title} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Number</label>
                      <input className="form-control" name='mobile' value={formvalue.mobile} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Area</label>
                      <input className="form-control" name='area' value={formvalue.area} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Full Adsress</label>
                      <input className="form-control" name='full_address' value={formvalue.full_address} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Location</label>
                      <input className="form-control" name='map_url' value={formvalue.map_url} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist About</label>
                      <input className="form-control" name='about' value={formvalue.about} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Services</label>
                      <input className="form-control" name='services' value={formvalue.services} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Image</label>
                      <input className="form-control" name='profile_img' value={formvalue.profile_img} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Work Image</label>
                      <input className="form-control" name='work_img' value={formvalue.work_img} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Product used</label>
                      <input className="form-control" name='product_used' value={formvalue.product_used} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Price</label>
                      <input className="form-control" name='price' value={formvalue.price} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Travel</label>
                      <input className="form-control" name='travel_to_vanue' value={formvalue.travel_to_vanue} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Airbrush</label>
                      <input className="form-control" name='airbrush' value={formvalue.airbrush} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Status</label>
                      <input className="form-control" name='status' value={formvalue.status} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Since Work</label>
                      <input className="form-control" name='since_work' value={formvalue.since_work} onChange={getform} type="text" />
                    </div>
                    <div className="form-group">
                      <label>Artist Timming</label>
                      <input className="form-control" name='timming' value={formvalue.timming} onChange={getform} type="text" />
                    </div>


                    <button type="submit" className="btn btn-info">Submit </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Add_artist