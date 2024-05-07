import React, { useEffect, useState } from 'react'
import Menubar from '../Components/Menubar'
import Footer from '../Components/Footer'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_artist() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`https://beaidal.com/view_artist.php`);
    console.log(res.data);
    setData(res.data);
  }
  const handleDelete = async (id) => {
    try {
      await axios.post(`https://beaidal.com/delete_artist.php`, { id: id });
      fetch(); // Refresh the data after successful deletion
      toast.success("Delete success");
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.success("Artist Delete Success")
    }
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    pass:"",
    mobile: "",
  });

  const editdata = async (id) => {
    const res = await axios.post(`https://beaidal.com/single_artist.php`, { id: id });
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };
  const validation = () => {
    var result = true;
    if (formvalue.name === "") {
      toast.error("name is required");
      result = false;
      return false;
    }
    if (formvalue.email === "") {
      toast.error("email is required");
      result = false;
      return false;
    }
    if (formvalue.mobile === "") {
      toast.error("mobile is required");
      result = false;
      return false;
    }
    if (formvalue.pass === "") {
      toast.error("pass is required");
      result = false;
      return false;
    }

    if (formvalue.shop_title === "") {
      toast.error("shop_title is required");
      result = false;
      return false;
    }
    if (formvalue.area === "") {
      toast.error("area is required");
      result = false;
      return false;
    }
    if (formvalue.full_address === "") {
      toast.error("full_address is required");
      result = false;
      return false;
    }
    if (formvalue.map_url === "") {
      toast.error("map_url is required");
      result = false;
      return false;
    }
    if (formvalue.about === "") {
      toast.error("about is required");
      result = false;
      return false;
    }
    if (formvalue.services === "") {
      toast.error("services is required");
      result = false;
      return false;
    }
    if (formvalue.profile_img === "") {
      toast.error("profile_img is required");
      result = false;
      return false;
    }
    if (formvalue.work_img === "") {
      toast.error("work_img is required");
      result = false;
      return false;
    }
    if (formvalue.product_used === "") {
      toast.error("product_used is required");
      result = false;
      return false;
    }
    if (formvalue.price === "") {
      toast.error("price is required");
      result = false;
      return false;
    }
    if (formvalue.travel_to_vanue === "") {
      toast.error("travel_to_vanue is required");
      result = false;
      return false;
    }
    if (formvalue.airbrush === "") {
      toast.error("airbrush is required");
      result = false;
      return false;
    }
    if (formvalue.since_work === "") {
      toast.error("since_work is required");
      result = false;
      return false;
    }
    if (formvalue.timming === "") {
      toast.error("timming is required");
      result = false;
      return false;
    }
    return result;
  };
  //  save edit
  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(`https://beaidal.com/single_artist.php${formvalue.id}`,formvalue);
      console.log(res);
      if (res.status === 200) {
        setFormvalue({ ...formvalue, name: "", email: "", pass: "",  shop_title: "", mobile: "", area: "",  full_address: "",  map_url: "",  about: "",  services: "",  profile_img: "",  work_img: "",  product_used: "",  price: "",  travel_to_vanue: "",  airbrush: "",  status: "",  since_work: "",  timming: "" });
        toast.success("Update success");
        fetch();
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
              <h1 className="header-line">Manage Artist</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-info">
                <div className="panel-heading">
                  Manage Artist
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Password</th>
                          <th>Profile image</th>
                          <th>Shop Title</th>
                          <th>Area</th>
                          <th>Full Addsress</th>
                          <th>Map </th>
                          <th>About</th>
                          <th>Services</th>
                          <th>Work image</th>
                          <th>Product use</th>
                          <th>Price </th>
                          <th>Travel To Vanue</th>
                          <th>Airbrush</th>
                          <th>Since Work</th>
                          <th>Timming</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data && data.map((value, index, arr) => {
                            return (
                              <tr>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.mobile}</td>
                                <td>{value.pass}</td>
                                <td><img src={value.profile_img} height={"50px"}></img></td>
                                <td className='d-flex'>
                                  <button className='btn btn-primary m-2' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editdata(value.id)}>Edit</button>
                                  <button className='btn btn-danger  m-2' onClick={() => handleDelete(value.id)}>Delete</button>

                                </td>
                              </tr>
                            )
                          })
                        }
                        <div>

                          {/* The Modal */}
                          <div className="modal" id="myModal">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                {/* Modal Header */}
                                <div className="modal-header">
                                  <h4 className="modal-title">Edit Artist</h4>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                </div>
                                {/* Modal body */}

                                <div className="modal-body">
                                  <form onSubmit={submithandel}>
                                    <label > Name:</label><br />
                                    <input className="form-control" type='text' name="name" value={formvalue.name} onChange={getform} /><br />
                                    <label>Email :</label><br />
                                    <input className="form-control"  type="text" id="email" name="emil" value={formvalue.email} onChange={getform} /><br /><br />
                                    <label > Artist Number :</label><br />
                                    <input className="form-control"  type="text" id="number" name="mobile" value={formvalue.mobile} onChange={getform} /><br /><br />
                                    <label>Password</label>
                                    <input className="form-control" type="password" name='pass' value={formvalue.pass} onChange={getform} /><br></br>
                                    <label>Artist Image</label>
                                    <input className="form-control" name='profile_img' value={formvalue.profile_img} onChange={getform} type="text" />
                                    <label>Shop Name</label>
                                    <input className="form-control" name='shop_title' onChange={getform} type="text" />
                                    <label>Artist Area</label>
                                    <input className="form-control" name='area'  onChange={getform} type="text" />
                                    <label>Artist Full Adsress</label>
                                    <input className="form-control" name='full_address'  onChange={getform} type="text" />
                                    <label>Artist Location</label>
                                    <input className="form-control" name='map_url' onChange={getform} type="text" />
                                    <label>Artist About</label>
                                    <input className="form-control" name='about'  onChange={getform} type="text" />
                                    <label>Artist Services</label>
                                    <input className="form-control" name='services'  onChange={getform} type="text" />
                                    <label>Artist Work Image</label>
                                    <input className="form-control" name='work_img'  onChange={getform} type="text" />
                                    <label>Artist Product used</label>
                                    <input className="form-control" name='product_used'  onChange={getform} type="text" />
                                    <label>Artist Price</label>
                                    <input className="form-control" name='price'  onChange={getform} type="text" />
                                    <label>Artist Travel</label>
                                    <input className="form-control" name='travel_to_vanue'  onChange={getform} type="text" />
                                    <label>Artist Airbrush</label>
                                    <input className="form-control" name='airbrush'  onChange={getform} type="text" />
                                    <label>Artist Since Work</label>
                                    <input className="form-control" name='since_work'  onChange={getform} type="text" />
                                    <label>Artist Timming</label>
                                    <input className="form-control" name='timming'  onChange={getform} type="text" />
                                  </form>


                                </div>

                                {/* Modal footer */}
                                <div className="modal-footer d-flex">
                                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-success" data-bs-dismiss="modal">Save</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/*End Advanced Tables */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Manage_artist