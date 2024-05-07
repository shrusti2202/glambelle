import React, { useEffect, useState } from 'react'
import Menubar from '../Components/Menubar'
import Footer from '../Components/Footer'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_contact() {

  const [data, setData] = useState([]);

  useEffect(() => {
      fetch();
  }, []);

  const fetch = async () => {
    try{
      const res = await axios.get(`https://beaidal.com/view_contacts.php`);
      setData(res.data);
  }  catch(error){
console.error("Error fetching contect:",error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(`https://beaidal.com/delete_contacts.php`,{id:id});
      fetch(); // Refresh the data after successful deletion
      toast.success("Delete success");
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.success("Contact Delete Success")
    }
  };
  return (
    <div>
        <Menubar/>
        <div className="content-wrapper container" style={{ marginTop: '100px' }}>
        <div className="container">
          <div className="row pad-botm">
            <div className="col-md-12">
              <h1 className="header-line">Manage Contact</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-info">
                <div className="panel-heading">
                  Manage Contact
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                      <thead>
                        <tr style={{textAlign:'center'}}>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Comment</th>
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
                                                        <td>{value.comment}</td>
                                                        <td className='d-flex'>
                                                            <button className='btn btn-primary m-2'data-bs-toggle="modal" data-bs-target="#myModal">Edit</button>
                                                            <button className='btn btn-danger  m-2'  onClick={() => handleDelete(value.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
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
        <Footer/>
    </div>
  )
}

export default Manage_contact