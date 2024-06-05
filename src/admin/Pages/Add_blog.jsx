import React, { useState } from 'react'
import Menubar from '../Components/Menubar'
import Footer from '../Components/Footer'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Add_blog() {

  const [formvalue, setFormvalue] = useState({
    id:"",
    title: "",
    image: "",
    description: ""
  });

  const getform = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const validation = () => {
    var result = true;
    if (formvalue.title === "") {
      toast.error("Title is required");
      result = false;
      return false;
    }
    if (formvalue.image === "") {
      toast.error("Image is required");
      result = false;
      return false;
    }
    if (formvalue.description === "") {
      toast.error("Description is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`https://beaidal.com/create_blog.php`, formvalue);
      // console.log(res);
      if (res.status === 200) {
        setFormvalue({ ...formvalue, title: "", image: "", description: "" });
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
              <h1 className="header-line">Add Blog</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-info">
                <div className="panel-heading">
                  Blog
                </div>
                <div className="panel-body">
                  <form role="form" onSubmit={submithandel}>
                    <div className="form-group">
                      <label> Name</label>
                      <input className="form-control" type="text" name='title' value={formvalue.title} onChange={getform} />
                    </div>
                    <div className="form-group">
                      <label>Image</label>
                      <input className="form-control" type="url" name='image' value={formvalue.image} onChange={getform} />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <input className="form-control" type="text" name='description' value={formvalue.description} onChange={getform} />
                    </div>
                    <button type="submit" className="btn btn-info">Submit</button>
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
export default Add_blog