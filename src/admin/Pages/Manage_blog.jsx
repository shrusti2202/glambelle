import React, { useEffect, useState } from 'react'
import Menubar from '../Components/Menubar'
import Footer from '../Components/Footer'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_blog() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`https://beaidal.com/view_blog.php`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(`https://beaidal.com/delete_blog.php`, { id: id });
      fetchContacts(); // Refresh the data after successful deletion
      toast.success("Delete success");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Edit
  const [formvalue, setFormvalue] = useState({
    id: "",
    title: "",
    image: "",
    description: "",
  });

  const editdata = async (id) => {
    const res = await axios.post(`https://beaidal.com/single_blog.php`, { id: id });
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };
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
  //  save edit
  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `https://beaidal.com/single_blog.php${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status === 200) {
        setFormvalue({
          ...formvalue,
          title: "",
          image: "",
          description: "",
        });
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
              <h1 className="header-line">Manage Blog</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-info">
                <div className="panel-heading">
                  Manage Blog
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Blog Title</th>
                          <th>Bloge Image</th>
                          <th>Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data && data.map((value, index, arr) => {
                            return (
                              <tr>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>{value.image}</td>
                                <td>{value.description}</td>
                                <td className='d-flex'>
                                  <button className='btn btn-primary m-2' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editdata(value.id)}>Edit</button>
                                  <button className='btn btn-danger  m-2' onClick={() => handleDelete(value.id)}>Delete</button>
                                </td>
                              </tr>


                            )
                          })
                        }
                        <div className="modal" id="myModal">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              {/* Modal Header */}
                              <div className="modal-header">
                                <h4 className="modal-title">Edit Blog</h4>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                />
                              </div>
                              {/* Modal body */}
                              <div className="modal-body">
                                <div className="container">
                                  <form action="" method="post">
                                    <div className="row g-4 mp-2">
                                      <div className="col-md-6">
                                        <div className="form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            value={formvalue.title}
                                            onChange={getform}
                                            id="title"
                                            placeholder="Title"
                                          />
                                          <label htmlFor="name">Title</label>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="image"
                                            value={formvalue.image}
                                            onChange={getform}
                                            id="image"
                                            placeholder="image"
                                          />
                                          <label htmlFor="image">Image</label>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="description"
                                            value={formvalue.description}
                                            onChange={getform}
                                            id="description"
                                            placeholder="description"
                                          />
                                          <label htmlFor="name">Description</label>
                                        </div>
                                      </div>

                                      <div className="col-12">
                                        <button
                                          onClick={submithandel}
                                          data-bs-dismiss="modal"
                                          className="btn btn-primary w-100 py-3"
                                          type="submit"
                                        >
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              {/* Modal footer */}
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
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

export default Manage_blog